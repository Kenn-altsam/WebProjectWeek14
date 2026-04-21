import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Devider } from '../../components/devider/devider';
import { Hotel } from '../../models/hotel.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule,Navbar, Devider, RouterLink, Footer],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css',
})
export class HotelDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private hotelService = inject(HotelService);

  hotel = signal<Hotel | null>(null);
  errorMessage = '';

  ngOnInit(): void {
    this.getHotelDetail();
  }

  getHotelDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'Invalid hotel id';
      return;
    }

    this.hotelService.getHotelById(id).subscribe({
      next: (data) => {
        this.hotel.set(data);
        this.hotelService.setSelectedHotel(data);
      },
      error: () => {
        this.errorMessage = 'Failed to load hotel details';
      }
    });
  }

}
