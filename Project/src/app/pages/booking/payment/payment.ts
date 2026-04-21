import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BookingService } from '../../../services/booking';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})

export class Payment implements OnInit {
  bookingService = inject(BookingService);
  router = inject(Router);

  booking = this.bookingService.bookingData;

  cardNumber = signal('');
  bank = signal('');
  expDate = signal('');
  cvv = signal('');
  errorMessage = signal('');
  isSubmitting = signal(false);

  ngOnInit() {
    if (!this.booking()) {
      this.router.navigate(['/booking']);
    }
  }

  pay() {

    const bookingData = this.booking();

    if(!bookingData) {
      this.errorMessage.set('No booking data found!');
      this.router.navigate(['/booking']);
      return;
    }

    if (!this.cardNumber() || !this.bank() || !this.expDate() || !this.cvv()) {
      this.errorMessage.set('Please fill all fields!');
      return;
    }
    
    if (this.cardNumber().length < 16) {
      this.errorMessage.set('Card number must be 16 digits!');
      return;
    }

    this.errorMessage.set('');
    this.isSubmitting.set(true);

    this.bookingService.createBooking(bookingData).subscribe({
      next: () => {
        this.bookingService.clearBooking();
        this.isSubmitting.set(false);
        this.router.navigate(['/payment-success']);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('Payment failed. Please try again.');
      }
    });
  }
}