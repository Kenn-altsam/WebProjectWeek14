import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './pages/home/home';
import { BookingInfo } from './pages/booking/booking-info/booking-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, BookingInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project');
}
