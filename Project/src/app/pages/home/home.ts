import {Component} from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';
import {SearchBar} from '../../components/search-bar/search-bar';
import {Footer} from '../../components/footer/footer';
import {HotelCard} from '../../components/hotel-card/hotel-card';
import {Hotel} from '../../models/hotel.model';
import {HotelSearchResultEvent} from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Devider,
    SearchBar,
    Footer,
    HotelCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchResults: Hotel[] = [];
  hasSearched = false;
  searchTitle = '';

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }

  onSearchResults(event: HotelSearchResultEvent) {
    this.searchResults = event.hotels;
    this.hasSearched = true;
    this.searchTitle = event.location
      ? `Search results for "${event.location}"`
      : 'Search results';

    setTimeout(() => {
      document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
