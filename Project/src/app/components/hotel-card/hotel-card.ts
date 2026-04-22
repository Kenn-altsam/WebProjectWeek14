import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hotel} from '../../models/hotel.model';
import {HotelService} from '../../services/hotel';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  imports: [
    RouterLink
  ],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.css',
})
export class HotelCard implements OnInit, OnChanges {
  @Input() hotels: Hotel[] | null = null;

  hotelImageUrl = '/images/most-pickes-example.png';

  mostPickedHotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.updateHotels();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hotels']) {
      this.updateHotels();
    }
  }

  private updateHotels(): void {
    this.mostPickedHotels = this.hotels?.length ? this.hotels : this.hotelService.getMostPicked();
  }
}
