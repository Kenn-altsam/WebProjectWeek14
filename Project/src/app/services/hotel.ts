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
      description: "Открытая в 1977 году, гостиница Kazakhstan стала одним из ключевых архитектурных проектов своего времени и символом Алматы, Казахстана и всего Центрально-Азиатского региона. Проект, созданный архитекторами Ю. Г. Ратушным, Л. Л. Ухоботовым и их командой, объединил эстетику позднего модернизма и инженерную смелость.",  
      images: [
          "https://parkhotel-almaty.com/upload/resize_cache/iblock/4da/1240_810_2/5bujlchuay6ocmrgm4u3xp39bkvudnsh.jpg",
          "https://avatars.mds.yandex.net/get-altay/788991/2a000001615729b8c96ce557de3e2ead3170/XXXL",
          "https://avatars.mds.yandex.net/get-altay/367090/2a000001615729fa24ef5b82a673d1f7a019/XXXL"
        ],
      facilities: [
          { name: "Parking", icon: "fa-car" },
          { name: "WiFi", icon: "fa-wifi" },
          { name: "TV", icon: "fa-tv" },
          { name: "Microwave", icon: "fa-kitchen-set" },
        ],
      rating: 5.0,
      treasures: [
        { name: "Green Lake", category: "Nature", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400", isPopular: false },
        { name: "Dog Clubs", category: "Pool", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400", isPopular: false },
        { name: "Labour and Wait", category: "Shopping", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400", isPopular: true },
        { name: "Snorkeling", category: "Beach", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", isPopular: false },
      ]
    }
  }
}
