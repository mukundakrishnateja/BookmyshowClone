import express from 'express';
import { createBooking, getOccupiedSeats, confirmPayment } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/create',createBooking)
bookingRouter.post('/confirm',confirmPayment)

bookingRouter.get('/seats/:showId',getOccupiedSeats)

export default bookingRouter;