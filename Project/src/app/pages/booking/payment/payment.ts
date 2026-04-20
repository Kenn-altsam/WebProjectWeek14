import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookingService } from '../../../services/booking';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [RouterLink, FormsModule],
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

  ngOnInit() {
    if (!this.booking()) {
      this.router.navigate(['/booking']);
    }
  }

  errorMessage = signal('');

  pay() {
    if (!this.cardNumber() || !this.bank() || !this.expDate() || !this.cvv()) {
      this.errorMessage.set('Please fill all fields!');
      return;
    }
    if (this.cardNumber().length < 16) {
      this.errorMessage.set('Card number must be 16 digits!');
      return;
    }
    this.errorMessage.set('');
    this.router.navigate(['/payment-success']);
  }
}