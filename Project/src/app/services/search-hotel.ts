import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../models/hotel.model';
import { HotelSearchParams, HotelService } from './hotel';

@Injectable({
  providedIn: 'root',
})
  export class SearchHotel {
  constructor(private hotelService: HotelService) {}

  search(params: HotelSearchParams): Observable<Hotel[]> {
    return of(this.hotelService.searchHotels(params));
  }
}
