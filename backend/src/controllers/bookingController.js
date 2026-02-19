const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { BookingRequest, House, Package } = require('../models');
const {
  calculateNights,
  formatBookingSummary,
  generateBookingId,
  hasOverlapBooking,
} = require('../utils/bookingHelpers');

const resolveHouse = async ({ houseId, slug }) => {
  if (houseId) {
    return House.findOne({ _id: houseId, isActive: true }).lean();
  }

  return House.findOne({ slug, isActive: true }).lean();
};

const resolvePackage = async ({ packageId, packageCode, houseId }) => {
  if (packageId) {
    return Package.findOne({ _id: packageId, houseId }).lean();
  }

  return Package.findOne({ houseId, code: packageCode }).lean();
};

const checkAvailability = asyncHandler(async (req, res) => {
  const { houseId, houseSlug, slug, checkIn, checkOut, packageCode } = req.body;

  const normalizedSlug = houseSlug || slug;
  const house = await resolveHouse({ houseId, slug: normalizedSlug });

  if (!house) {
    throw new ApiError(404, 'House not found or inactive');
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = calculateNights(checkInDate, checkOutDate);

  if (nights <= 0) {
    return res.status(200).json({
      success: true,
      available: false,
      reason: 'checkOut must be after checkIn',
      nights,
    });
  }

  if (packageCode) {
    const selectedPackage = await resolvePackage({
      packageCode,
      houseId: house._id,
    });

    if (!selectedPackage) {
      throw new ApiError(404, 'Package not found for the selected house');
    }

    if (nights < selectedPackage.minNights) {
      return res.status(200).json({
        success: true,
        available: false,
        reason: `Minimum ${selectedPackage.minNights} night(s) required for ${selectedPackage.name}`,
        nights,
      });
    }
  }

  const overlappingBooking = await hasOverlapBooking({
    houseId: house._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
  });

  if (overlappingBooking) {
    return res.status(200).json({
      success: true,
      available: false,
      reason: 'These dates are already booked. Please choose different dates.',
      nights,
    });
  }

  return res.status(200).json({
    success: true,
    available: true,
    reason: null,
    nights,
  });
});

const createBookingRequest = asyncHandler(async (req, res) => {
  const {
    houseId,
    houseSlug,
    packageId,
    packageCode,
    guest,
    stay,
    preferences = {},
    pricing,
  } = req.body;

  const house = await resolveHouse({ houseId, slug: houseSlug });

  if (!house) {
    throw new ApiError(404, 'House not found or inactive');
  }

  const selectedPackage = await resolvePackage({
    packageId,
    packageCode,
    houseId: house._id,
  });

  if (!selectedPackage) {
    throw new ApiError(404, 'Package not found for the selected house');
  }

  const checkInDate = new Date(stay.checkIn);
  const checkOutDate = new Date(stay.checkOut);
  const nights = calculateNights(checkInDate, checkOutDate);

  if (nights < selectedPackage.minNights) {
    throw new ApiError(400, `Minimum ${selectedPackage.minNights} night(s) required for ${selectedPackage.name}`);
  }

  const overlappingBooking = await hasOverlapBooking({
    houseId: house._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
  });

  if (overlappingBooking) {
    throw new ApiError(409, 'Selected dates are not available due to overlapping booking');
  }

  const bookingId = await generateBookingId();

  const booking = await BookingRequest.create({
    bookingId,
    houseId: house._id,
    packageId: selectedPackage._id,
    guest,
    stay: {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: stay.guests,
      nights,
    },
    preferences: {
      unitType: preferences.unitType || '',
      viewType: preferences.viewType || '',
      notes: preferences.notes || '',
    },
    pricing,
    status: 'pending',
    paymentStatus: 'none',
    square: {
      paymentId: null,
      checkoutUrl: null,
    },
  });

  const populated = await BookingRequest.findById(booking._id)
    .populate('houseId', 'name slug')
    .populate('packageId', 'name code pricePerNight minNights')
    .lean();

  res.status(201).json({
    success: true,
    message: 'Booking request created successfully',
    bookingId,
    summary: formatBookingSummary(populated),
  });
});

const getBookingByBookingId = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;

  const booking = await BookingRequest.findOne({ bookingId: bookingId.toUpperCase() })
    .populate('houseId', 'name slug')
    .populate('packageId', 'name code pricePerNight minNights')
    .lean();

  if (!booking) {
    throw new ApiError(404, `Booking not found for ID: ${bookingId}`);
  }

  res.status(200).json({
    success: true,
    summary: formatBookingSummary(booking),
  });
});

module.exports = {
  checkAvailability,
  createBookingRequest,
  getBookingByBookingId,
};
