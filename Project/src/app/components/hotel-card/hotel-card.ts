import {Component, OnInit} from '@angular/core';
import {Hotel} from '../../models/hotel.model';
import {HotelService} from '../../services/hotel';

@Component({
  selector: 'app-hotel-card',
  imports: [],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.css',
})
export class HotelCard implements OnInit {
  hotelImageUrl = '/images/most-pickes-example.png';

  mostPickedHotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.mostPickedHotels = this.hotelService.getMostPicked();
  }
}
