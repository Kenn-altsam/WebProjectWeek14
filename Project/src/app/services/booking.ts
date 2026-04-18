import { Injectable, signal } from '@angular/core';
import { Booking } from '../models/booking.model';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingData = signal<Booking | null>(null)

  book(data: Booking) {
    this.bookingData.set(data);
  }

  clearBooking() {
    this.bookingData.set(null);
  }
}
