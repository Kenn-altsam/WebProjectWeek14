import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';
import {SearchBar} from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Devider,
    SearchBar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
