import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HotelService } from '../../../services/hotel';
import { BookingService } from '../../../services/booking';
import { Devider } from '../../../components/devider/devider';

@Component({
  selector: 'app-booking-info',
  imports: [RouterLink, Devider],
  templateUrl: './booking-info.html',
  styleUrl: './booking-info.css',
})
export class BookingInfo implements OnInit {
  hotelService = inject(HotelService);
  bookingService = inject(BookingService);
  router = inject(Router);

  hotel = signal(this.hotelService.getMockHotel());
  days = signal(2);
  checkIn = signal('');
  checkOut = signal('');
  selectedDate = signal<Date | null>(null);


  calculateDates() {
    const start = this.selectedDate();
    if (!start) return;
    
    const end = new Date(start);
    end.setDate(end.getDate() + this.days());
    
    this.checkIn.set(start.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));
    this.checkOut.set(end.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }));
  }

  get total() {
    return this.hotel().price * this.days();
  }

  ngOnInit() {}

  increment() { 
    this.days.set(this.days() + 1); 
    this.calculateDates();
  }
  
  decrement() { 
    if (this.days() > 1) this.days.set(this.days() - 1);
    this.calculateDates();
  }

  book() {
    this.bookingService.book({
      id: 1,
      user_id: 1,
      hotel: this.hotel(),
      check_in: new Date(),
      check_out: new Date(),
      days: this.days(),
      total_amount: this.total,
    });
    this.router.navigate(['/payment']);
  }

onDateChange(event: any) {
  this.selectedDate.set(new Date(event.target.value));
  this.calculateDates();
}
}