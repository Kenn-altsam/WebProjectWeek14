import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration-success.html',
  styleUrls: ['./registration-success.css']
})
export class RegistrationSuccess {
  bookNow(): void {
    console.log('Book now clicked');
  }
}