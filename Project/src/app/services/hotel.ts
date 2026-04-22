import { Injectable, signal } from '@angular/core';
import { Hotel } from '../models/hotel.model';

export interface HotelSearchParams {
  date: string;
  guests: number;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  selectedHotel = signal<Hotel | null>(null);

  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'Kazakhstan Hotel',
      location: 'Almaty, Kazakhstan',
      price: 22,
      num_of_rooms: 447,
      description: 'An iconic landmark in the heart of Almaty, offering majestic views of the Trans-Ili Alatau mountains.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/794186375.jpg?k=344a98113679cda50d03f7601e9436ad50df8ba86843b3f1d4cc3e07e3a565bd&o='],
      facilities: [
        { name: 'Free WiFi', icon: 'wifi' },
        { name: 'Parking', icon: 'local_parking' },
      ],
      rating: 4.5,
      treasures: [
        { name: 'Panoramic Bar', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80', isPopular: true },
        { name: 'Historic Lobby', category: 'Culture', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
      ],
    },
    {
      id: 2,
      name: 'Shymbulak Resort',
      location: 'Shymbulak, Almaty',
      price: 85,
      num_of_rooms: 50,
      description: 'Located at an altitude of 2260 meters, perfect for ski enthusiasts and mountain weekends.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/327263808.jpg?k=45b0bb9e526660251a6e1907731b98ddf770893d560ce227ad64842d8c963914&o='],
      facilities: [
        { name: 'Ski-to-door', icon: 'ac_unit' },
        { name: 'Sauna', icon: 'spa' },
      ],
      rating: 4.8,
      treasures: [
        { name: 'Mountain View', category: 'Nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 3,
      name: 'The Ritz-Carlton Almaty',
      location: 'Esentai Tower, Almaty',
      price: 250,
      num_of_rooms: 145,
      description: 'A luxury stay in the tallest part of Almaty with refined dining, spa access, and skyline views.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/446572859.jpg?k=02ed7b9d21e3abb4fb95a330d72de4b77e3c5b26e47540fdeb5761c6b7bb0864&o='],
      facilities: [
        { name: 'Indoor Pool', icon: 'pool' },
        { name: 'Fitness Center', icon: 'fitness_center' },
      ],
      rating: 5.0,
      treasures: [
        { name: 'Sky Lounge', category: 'Luxury', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 4,
      name: 'Forest Song Eco-Hotel',
      location: 'Ile-Alatau Park, Almaty',
      price: 45,
      num_of_rooms: 12,
      description: 'Cozy wooden cabins tucked away in the pine forests near Ile-Alatau hiking trails.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/604061456.jpg?k=598fb94bdfc4bc0f26bab4aab0ff81aaeffc1f97dcb813c0339b26a44145d2d1&o='],
      facilities: [
        { name: 'Hiking Trails', icon: 'terrain' },
        { name: 'Fireplace', icon: 'fireplace' },
      ],
      rating: 4.2,
      treasures: [
        { name: 'Pine Forest', category: 'Nature', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80' },
      ],
    },
    {
      id: 5,
      name: 'Astana Marriott',
      location: 'Astana, Kazakhstan',
      price: 110,
      num_of_rooms: 271,
      description: 'Located in the vibrant business district of the capital, close to offices and major landmarks.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/505631493.jpg?k=f0665f4a0441ac5a1f59ad51d74e756cb8d098b3896f0a4b0ec449e80c261af1&o='],
      facilities: [
        { name: 'Business Center', icon: 'work' },
        { name: 'Swimming Pool', icon: 'pool' },
      ],
      rating: 4.7,
      treasures: [
        { name: 'City Skyline', category: 'Cityscape', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80' },
      ],
    },
    {
      id: 6,
      name: 'Caspian Riviera Palace',
      location: 'Aktau, Kazakhstan',
      price: 180,
      num_of_rooms: 120,
      description: 'A cliffside hotel overlooking the Caspian Sea with private beach access and sea-view rooms.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/180668569.jpg?k=882cc5f9dce5353831e589988acad2cce12335fe9a7f1cfb3c747053e42e85dd&o='],
      facilities: [
        { name: 'Private Beach', icon: 'beach_access' },
        { name: 'Aquarium', icon: 'water' },
      ],
      rating: 4.6,
      treasures: [
        { name: 'Caspian Sunset', category: 'Sea View', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 7,
      name: 'Nomad Guesthouse',
      location: 'Kolsay Lakes, Kazakhstan',
      price: 15,
      num_of_rooms: 8,
      description: 'A friendly mountain guesthouse near Kolsay Lakes with local meals and horseback riding.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/695889418.jpg?k=e93889102d8aa4ce9edfa21e47cebebd1cab94468a185ba5b1b7d034e958c3de&o='],
      facilities: [
        { name: 'Horseback Riding', icon: 'bedroom_baby' },
        { name: 'Kitchen', icon: 'kitchen' },
      ],
      rating: 4.0,
      treasures: [
        { name: 'Lake Access', category: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 8,
      name: 'Rixos President Astana',
      location: 'Astana, Kazakhstan',
      price: 195,
      num_of_rooms: 184,
      description: 'One of the most prestigious hotels in Astana with classic interiors and a central location.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/751832172.jpg?k=f4120ac181af1d575d37617c89d047127bc53c7af4695c9d30b4899256f2e34f&o='],
      facilities: [
        { name: 'Turkish Hammam', icon: 'hot_tub' },
        { name: 'Spa', icon: 'spa' },
      ],
      rating: 4.9,
      treasures: [
        { name: 'Baiterek View', category: 'Cityscape', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 9,
      name: 'Turkistan Silk Road',
      location: 'Turkistan, Kazakhstan',
      price: 55,
      num_of_rooms: 60,
      description: 'An oriental-style hotel near the Khoja Ahmed Yasawi Mausoleum and old Silk Road sights.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/663883121.jpg?k=6f3e32bff0fc19510daf12cd41eed86be49e5bae60f2fb8f98da9608eaafe5d2&o='],
      facilities: [
        { name: 'Tea House', icon: 'coffee' },
        { name: 'Garden', icon: 'park' },
      ],
      rating: 4.4,
      treasures: [
        { name: 'Mausoleum Proximity', category: 'History', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80' },
      ],
    },
    {
      id: 10,
      name: 'Almaty Backpackers',
      location: 'Almaty, Kazakhstan',
      price: 12,
      num_of_rooms: 10,
      description: 'A social hostel in Almaty with shared rooms, a common area, and budget-friendly prices.',
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/504432569.jpg?k=1b0461147aeb9b2e796ae914ff82c9e81f813b3719e2686f851156fc7112ca31&o='],
      facilities: [
        { name: 'Common Area', icon: 'groups' },
        { name: 'Laundry', icon: 'local_laundry_service' },
      ],
      rating: 4.3,
      treasures: [
        { name: 'Traveler Community', category: 'Social', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80' },
      ],
    },
    {
      id: 11,
      name: 'Borovoe Lakeside Retreat',
      location: 'Burabay, Kazakhstan',
      price: 72,
      num_of_rooms: 32,
      description: 'A calm lakeside stay near pine forests, boat piers, and walking trails around Burabay.',
      images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80'],
      facilities: [
        { name: 'Lake View', icon: 'water' },
        { name: 'Breakfast', icon: 'restaurant' },
      ],
      rating: 4.6,
      treasures: [
        { name: 'Lake Borovoe', category: 'Nature', image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 12,
      name: 'Charyn Canyon Lodge',
      location: 'Charyn, Kazakhstan',
      price: 66,
      num_of_rooms: 18,
      description: 'A quiet desert lodge for canyon trips, sunset viewpoints, and stargazing outside the city.',
      images: ['https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80'],
      facilities: [
        { name: 'Tours', icon: 'map' },
        { name: 'Fire Pit', icon: 'fireplace' },
      ],
      rating: 4.5,
      treasures: [
        { name: 'Valley of Castles', category: 'Adventure', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 13,
      name: 'Kolsay Alpine Cabins',
      location: 'Kolsay Lakes, Kazakhstan',
      price: 58,
      num_of_rooms: 24,
      description: 'Warm mountain cabins close to the Kolsay lake trails, horseback routes, and pine valleys.',
      images: ['https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80'],
      facilities: [
        { name: 'Cabins', icon: 'cabin' },
        { name: 'Hiking', icon: 'terrain' },
      ],
      rating: 4.7,
      treasures: [
        { name: 'Lower Kolsay Lake', category: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80', isPopular: true },
      ],
    },
    {
      id: 14,
      name: 'Atyrau Riverside Hotel',
      location: 'Atyrau, Kazakhstan',
      price: 92,
      num_of_rooms: 96,
      description: 'Business-friendly hotel beside the Ural River with meeting rooms and city access.',
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'],
      facilities: [
        { name: 'Business Center', icon: 'work' },
        { name: 'River View', icon: 'water' },
      ],
      rating: 4.2,
      treasures: [
        { name: 'Ural Promenade', category: 'City Walk', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80' },
      ],
    },
    {
      id: 15,
      name: 'Medeu Mountain Inn',
      location: 'Medeu, Almaty',
      price: 74,
      num_of_rooms: 40,
      description: 'A mountain inn near Medeu ice rink and the road to Shymbulak, suited for active weekends.',
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'],
      facilities: [
        { name: 'Mountain View', icon: 'landscape' },
        { name: 'Ski Shuttle', icon: 'ac_unit' },
      ],
      rating: 4.8,
      treasures: [
        { name: 'Medeu Ice Rink', category: 'Sport', image: 'https://images.unsplash.com/photo-1489674267075-cee793167910?w=400&q=80', isPopular: true },
      ],
    },
  ];

  getMockHotel(): Hotel {
    return this.getHotelById(1) || this.hotels[0];
  }

  getHotels(): Hotel[] {
    return [...this.hotels];
  }

  getMostPicked(): Hotel[] {
    return [...this.hotels].sort((a, b) => b.rating - a.rating).slice(0, 6);
  }

  getHotelById(id: number): Hotel | undefined {
    return this.hotels.find((hotel) => hotel.id === id);
  }

  searchHotels(params: HotelSearchParams): Hotel[] {
    const location = params.location.trim().toLowerCase();
    const guests = Number(params.guests) || 1;

    return this.hotels.filter((hotel) => {
      const matchesLocation = !location ||
        hotel.name.toLowerCase().includes(location) ||
        hotel.location.toLowerCase().includes(location) ||
        hotel.description.toLowerCase().includes(location);
      const matchesGuests = hotel.num_of_rooms >= guests;

      return matchesLocation && matchesGuests;
    });
  }
}
