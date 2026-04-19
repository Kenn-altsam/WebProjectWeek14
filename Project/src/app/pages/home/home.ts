import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';
import {SearchBar} from '../../components/search-bar/search-bar';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Devider,
    SearchBar,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
