import {Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Hotel} from '../../models/hotel.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.css',
})
export class HotelCard {

  @Input() hotel!: Hotel;

  hotelImageUrl = '/images/most-pickes-example.png';

}
