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

  private hotels: Hotel[] = [
    {
      id: 1,
      name: "Kazakhstan Hotel",
      location: "Almaty, Kazakhstan",
      price: 22,
      num_of_rooms: 447,
      description: "An iconic landmark in the heart of Almaty, offering majestic views of the Trans-Ili Alatau mountains.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/794186375.jpg?k=344a98113679cda50d03f7601e9436ad50df8ba86843b3f1d4cc3e07e3a565bd&o=", ""],
      facilities: [
        { name: "Free WiFi", icon: "wifi" },
        { name: "Parking", icon: "local_parking" }
      ],
      rating: 4.5,
      treasures: [
        { name: "Panoramic Bar", category: "Entertainment", image: "/images/t-bar.png", isPopular: true },
        { name: "Historic Lobby", category: "Culture", image: "/images/t-lobby.png" }
      ]
    },
    {
      id: 2,
      name: "Shymbulak Resort",
      location: "Shymbulak, Almaty",
      price: 85,
      num_of_rooms: 50,
      description: "Located at an altitude of 2260 meters, perfect for ski enthusiasts.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/327263808.jpg?k=45b0bb9e526660251a6e1907731b98ddf770893d560ce227ad64842d8c963914&o="],
      facilities: [
        { name: "Ski-to-door", icon: "ac_unit" },
        { name: "Sauna", icon: "spa" }
      ],
      rating: 4.8,
      treasures: [
        { name: "Mountain View", category: "Nature", image: "/images/t-mountain.png", isPopular: true }
      ]
    },
    {
      id: 3,
      name: "The Ritz-Carlton Almaty",
      location: "Esentai Tower, Almaty",
      price: 250,
      num_of_rooms: 145,
      description: "The height of luxury situated in the tallest building in the city.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/446572859.jpg?k=02ed7b9d21e3abb4fb95a330d72de4b77e3c5b26e47540fdeb5761c6b7bb0864&o="],
      facilities: [
        { name: "Indoor Pool", icon: "pool" },
        { name: "Fitness Center", icon: "fitness_center" }
      ],
      rating: 5.0,
      treasures: [
        { name: "Sky Lounge", category: "Luxury", image: "/images/t-sky.png", isPopular: true }
      ]
    },
    {
      id: 4,
      name: "Forest Song Eco-Hotel",
      location: "Ile-Alatau Park",
      price: 45,
      num_of_rooms: 12,
      description: "Cozy wooden cabins tucked away in the pine forests.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/604061456.jpg?k=598fb94bdfc4bc0f26bab4aab0ff81aaeffc1f97dcb813c0339b26a44145d2d1&o="],
      facilities: [
        { name: "Hiking Trails", icon: "terrain" },
        { name: "Fireplace", icon: "fireplace" }
      ],
      rating: 4.2,
      treasures: [
        { name: "Pine Forest", category: "Nature", image: "/images/t-forest.png" }
      ]
    },
    {
      id: 5,
      name: "Astana Marriott",
      location: "Astana, Kazakhstan",
      price: 110,
      num_of_rooms: 271,
      description: "Located in the vibrant business district of the capital.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/505631493.jpg?k=f0665f4a0441ac5a1f59ad51d74e756cb8d098b3896f0a4b0ec449e80c261af1&o= "],
      facilities: [
        { name: "Business Center", icon: "work" },
        { name: "Swimming Pool", icon: "pool" }
      ],
      rating: 4.7,
      treasures: [
        { name: "City Skyline", category: "Cityscape", image: "/images/t-skyline.png" }
      ]
    },
    {
      id: 6,
      name: "Caspian Riviera Palace",
      location: "Aktau, Kazakhstan",
      price: 180,
      num_of_rooms: 120,
      description: "Unique hotel built into the cliffside overlooking the Caspian Sea.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/180668569.jpg?k=882cc5f9dce5353831e589988acad2cce12335fe9a7f1cfb3c747053e42e85dd&o="],
      facilities: [
        { name: "Private Beach", icon: "beach_access" },
        { name: "Aquarium", icon: "water" }
      ],
      rating: 4.6,
      treasures: [
        { name: "Sturgeon Aquarium", category: "Unique", image: "/images/t-fish.png", isPopular: true }
      ]
    },
    {
      id: 7,
      name: "Nomad Guesthouse",
      location: "Kolsay Lakes",
      price: 15,
      num_of_rooms: 8,
      description: "Stay in a comfortable modern yurt and enjoy homemade baursaks.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/695889418.jpg?k=e93889102d8aa4ce9edfa21e47cebebd1cab94468a185ba5b1b7d034e958c3de&o="],
      facilities: [
        { name: "Horseback Riding", icon: "bedroom_baby" },
        { name: "Kitchen", icon: "kitchen" }
      ],
      rating: 4.0,
      treasures: [
        { name: "Lake Access", category: "Nature", image: "/images/t-lake.png", isPopular: true }
      ]
    },
    {
      id: 8,
      name: "Rixos President Astana",
      location: "Astana, Kazakhstan",
      price: 195,
      num_of_rooms: 184,
      description: "One of the most prestigious hotels in the capital city.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/751832172.jpg?k=f4120ac181af1d575d37617c89d047127bc53c7af4695c9d30b4899256f2e34f&o="],
      facilities: [
        { name: "Turkish Hammam", icon: "hot_tub" },
        { name: "Spa", icon: "spa" }
      ],
      rating: 4.9,
      treasures: [
        { name: "Baiterek View", category: "Cityscape", image: "/images/t-baiterek.png", isPopular: true }
      ]
    },
    {
      id: 9,
      name: "Turkistan Silk Road",
      location: "Turkistan, Kazakhstan",
      price: 55,
      num_of_rooms: 60,
      description: "Designed in oriental style near the Khoja Ahmed Yasawi Mausoleum.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/663883121.jpg?k=6f3e32bff0fc19510daf12cd41eed86be49e5bae60f2fb8f98da9608eaafe5d2&o="],
      facilities: [
        { name: "Tea House", icon: "coffee" },
        { name: "Garden", icon: "park" }
      ],
      rating: 4.4,
      treasures: [
        { name: "Mausoleum Proximity", category: "History", image: "/images/t-history.png" }
      ]
    },
    {
      id: 10,
      name: "Almaty Backpackers",
      location: "Almaty, Kazakhstan",
      price: 12,
      num_of_rooms: 10,
      description: "The most social hostel in the city with a famous backyard BBQ.",
      images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/504432569.jpg?k=1b0461147aeb9b2e796ae914ff82c9e81f813b3719e2686f851156fc7112ca31&o="],
      facilities: [
        { name: "Common Area", icon: "groups" },
        { name: "Laundry", icon: "local_laundry_service" }
      ],
      rating: 4.3,
      treasures: [
        { name: "Traveler Community", category: "Social", image: "/images/t-social.png" }
      ]
    }
  ];

  getMostPicked(): Hotel[] {
    return [...this.hotels].sort((a, b) => b.rating - a.rating)
      .slice(0,6);
  }
}
