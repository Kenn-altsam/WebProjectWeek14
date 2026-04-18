import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Devider} from '../../components/devider/devider';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Devider
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
