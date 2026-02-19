const express = require('express');

const {
  checkAvailability,
  createBookingRequest,
  getBookingByBookingId,
} = require('../controllers/bookingController');
const validateRequest = require('../middleware/validateRequest');
const {
  bookingIdParamsSchema,
  checkAvailabilitySchema,
  createBookingSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

router.post('/check-availability', validateRequest(checkAvailabilitySchema), checkAvailability);
router.post('/', validateRequest(createBookingSchema), createBookingRequest);
router.get('/:bookingId', validateRequest(bookingIdParamsSchema), getBookingByBookingId);

module.exports = router;
