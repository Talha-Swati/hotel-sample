const express = require('express');

const {
  checkAvailability,
  createBookingRequest,
  getBookingByBookingId,
  pricePreview,
} = require('../controllers/bookingController');
const validateRequest = require('../middleware/validateRequest');
const {
  bookingIdParamsSchema,
  checkAvailabilitySchema,
  createBookingSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

router.post('/check-availability', validateRequest(checkAvailabilitySchema), checkAvailability);
router.post('/price-preview', validateRequest(require('../utils/validationSchemas').pricePreviewSchema), pricePreview);
router.post('/', validateRequest(createBookingSchema), createBookingRequest);
router.get('/:bookingId', validateRequest(bookingIdParamsSchema), getBookingByBookingId);

module.exports = router;
