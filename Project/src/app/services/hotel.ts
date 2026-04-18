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
      images: ["https://parkhotel-almaty.com/upload/resize_cache/iblock/4da/1240_810_2/5bujlchuay6ocmrgm4u3xp39bkvudnsh.jpg",
               "https://avatars.mds.yandex.net/get-altay/788991/2a000001615729b8c96ce557de3e2ead3170/XXXL",
               "https://avatars.mds.yandex.net/get-altay/367090/2a000001615729fa24ef5b82a673d1f7a019/XXXL"],
      facilities: ["Parking", "wifi"],
      rating: 5.0,
    }
  }
}
