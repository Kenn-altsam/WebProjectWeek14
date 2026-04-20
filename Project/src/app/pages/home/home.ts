import {Component, OnInit} from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';
import {SearchBar} from '../../components/search-bar/search-bar';
import {Footer} from '../../components/footer/footer';
import {HotelCard} from '../../components/hotel-card/hotel-card';
import {Hotel} from '../../models/hotel.model';
import {HotelService} from '../../services/hotel';

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

}
