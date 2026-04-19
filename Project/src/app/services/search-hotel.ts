import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

interface SearchParams {
  date: string;
  guests: number;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
  export class SearchHotel {
  private apiUrl = 'http://localhost:8000/api/search/';

  constructor(private http: HttpClient) {}

  search(params: SearchParams) {
    const queryParams = new HttpParams()
      .set('date', params.date)
      .set('guests', params.guests.toString())
      .set('location', params.location);

    return this.http.get(this.apiUrl, {params: queryParams});
  }
}
