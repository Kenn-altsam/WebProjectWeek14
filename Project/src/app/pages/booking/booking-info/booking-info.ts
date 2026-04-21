import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HotelService } from '../../../services/hotel';
import { BookingService } from '../../../services/booking';
import { Auth } from '../../../services/auth';
import { Hotel } from '../../../models/hotel.model';
// import { Devider } from '../../../components/devider/devider';

@Component({
  selector: 'app-booking-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './booking-info.html',
  styleUrl: './booking-info.css',
})
export class BookingInfo implements OnInit {
  private hotelService = inject(HotelService);
  private bookingService = inject(BookingService);
  private auth = inject(Auth);
  private router = inject(Router);

  hotel = signal<Hotel | null>(null);
  days = signal(2);
  checkIn = signal('');
  checkOut = signal('');
  selectedDate = signal<Date | null>(null);

  calculateDates(): void {
    const start = this.selectedDate();
    if (!start) return;

    const end = new Date(start);
    end.setDate(end.getDate() + this.days());

    this.checkIn.set(start.toISOString().split('T')[0]);
    this.checkOut.set(end.toISOString().split('T')[0]);
  }

  get total(): number {
    return (this.hotel()?.price || 0) * this.days();
  }

  ngOnInit(): void {
    const selectedHotel = this.hotelService.selectedHotel();

    if (!selectedHotel) {
      this.router.navigate(['/home']);
      return;
    }

    this.hotel.set(selectedHotel);
  }

  increment(): void {
    this.days.set(this.days() + 1);
    this.calculateDates();
  }

  decrement(): void {
    if (this.days() > 1) {
      this.days.set(this.days() - 1);
      this.calculateDates();
    }
  }

  book(): void {
    const currentHotel = this.hotel();
    const userId = this.auth.getUserId();

    if (!currentHotel) {
      alert('Hotel not found');
      return;
    }

    if (!userId) {
      alert('Please login first');
      this.router.navigate(['/login']);
      return;
    }

    if (!this.selectedDate()) {
      alert('Please pick a date');
      return;
    }

    this.bookingService.setBookingData({
      hotel: currentHotel.id,
      user: userId,
      check_in: this.checkIn(),
      check_out: this.checkOut(),
      days: this.days(),
      total_amount: this.total,
    } as any);

    this.router.navigate(['/payment']);
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedDate.set(new Date(input.value));
    this.calculateDates();
  }
}