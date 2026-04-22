import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import { SearchHotel } from '../../services/search-hotel';
import {FormsModule} from '@angular/forms';
import { Hotel } from '../../models/hotel.model';

export interface HotelSearchResultEvent {
  hotels: Hotel[];
  location: string;
  date: string;
  guests: number;
}

@Component({
  selector: 'app-search-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() results = new EventEmitter<HotelSearchResultEvent>();

  selectedDate: string = '';
  guestCount: number = 2;
  selectedLocation: string = '';
  errorMessage = '';
  isLoading = false;

  openDropdown: string | null = null;

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    this.openDropdown = null;
  }

  toggle(panel: string, e: MouseEvent) {
    e.stopPropagation();
    this.openDropdown = this.openDropdown === panel ? null : panel;
  }

  isOpen(panel: string) {
    return this.openDropdown === panel;
  }

  onSearch() {
    if (this.isLoading) {
      return;
    }

    this.errorMessage = '';

    if (!Number.isFinite(this.guestCount) || this.guestCount < 1) {
      this.errorMessage = 'Please choose at least one guest.';
      return;
    }

    this.isLoading = true;

    this.searchHotel.search({
      date: this.selectedDate,
      guests: this.guestCount,
      location: this.selectedLocation,
    }).subscribe({
      next: (hotels) => {
        this.isLoading = false;
        this.results.emit({
          hotels,
          location: this.selectedLocation.trim(),
          date: this.selectedDate,
          guests: this.guestCount,
        });
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = this.getErrorMessage(error);
      },
    });
  }

  constructor(private searchHotel: SearchHotel) {}

  private getErrorMessage(error: unknown): string {
    if (error && typeof error === 'object' && 'message' in error) {
      return String((error as { message: unknown }).message);
    }

    return 'Search failed. Please try again.';
  }
}
