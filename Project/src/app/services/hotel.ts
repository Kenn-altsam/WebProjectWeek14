import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/hotels';

  selectedHotel = signal<Hotel | null>(null)

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/`);
  }

  getHotelById(id: number): Observable<Hotel> {
     return this.http.get<Hotel>(`${this.apiUrl}/${id}/`);
  }

  setSelectedHotel(hotel: Hotel): void {
    this.selectedHotel.set(hotel);
  }

}
