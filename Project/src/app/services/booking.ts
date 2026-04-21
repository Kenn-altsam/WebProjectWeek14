import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/bookings';

  bookingData = signal<Booking | null>(null)

  setBookingData(data: Booking): void {
    this.bookingData.set(data);
  }

  createBooking(data: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/`, data);
  }

  getBookingData(): Booking | null {
    return this.bookingData();
  }

  clearBooking(): void {
    this.bookingData.set(null);
  }
}
