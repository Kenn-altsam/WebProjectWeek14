import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';
import {SearchBar} from '../../components/search-bar/search-bar';
import {Footer} from '../../components/footer/footer';
import {HotelCard} from '../../components/hotel-card/hotel-card';
import {Hotel} from '../../models/hotel.model';
import {HotelService} from '../../services/hotel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Devider,
    SearchBar,
    Footer,
    HotelCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private hotelService = inject(HotelService);

  hotels: Hotel[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe({
      next: (data) => {
        this.hotels = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load hotels';
      }
    });
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
