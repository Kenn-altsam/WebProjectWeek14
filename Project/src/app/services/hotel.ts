import { Injectable, signal } from '@angular/core';
import { Hotel } from '../models/hotel.model';
@Injectable({
  providedIn: 'root',
})
export class HotelService {
  
  selectedHotel = signal<Hotel | null>(null)

  // just for test
  getMockHotel(): Hotel {
    return {
      id: 1,
      name: "BigHotel",
      location: "Almaty",
      price: 49000,
      num_of_rooms: 3,
      description: "Big hotel at the center of city",  
      images: ["https://parkhotel-almaty.com/", "https://travel.yandex.ru/hotels/almaty/"],
      facilities: ["Parking", "wifi"],
      rating: 5.0,
    }
  }
}
