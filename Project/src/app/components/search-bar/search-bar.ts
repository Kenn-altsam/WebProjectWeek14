import {Component, HostListener} from '@angular/core';
import { SearchHotel } from '../../services/search-hotel';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  selectedDate: string = '';
  guestCount: number = 2;
  selectedLocation: string = '';

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
    this.searchHotel.search({
      date: this.selectedDate,
      guests: this.guestCount,
      location: this.selectedLocation,
    }).subscribe(results => {
        console.log(results);
    })
  }

  constructor(private searchHotel: SearchHotel) {}
}
