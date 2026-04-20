import { Component, inject, signal, OnInit } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { Devider } from '../../components/devider/devider';
import { Hotel } from '../../models/hotel.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-hotel-details',
  imports: [Navbar, Devider, RouterLink, Footer],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css',
})
export class HotelDetails implements OnInit{
  route = inject(ActivatedRoute)
  hotelService = inject(HotelService)

  hotel = signal<Hotel | undefined>(undefined);

  ngOnInit() {
    this.getHotelDetail();
  }

  getHotelDetail() {
    this.hotel.set(this.hotelService.getMockHotel())
  }
}
