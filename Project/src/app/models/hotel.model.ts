export interface Hotel {
    id: number;
    name: string;
    location: string;
    price: number;
    num_of_rooms: number;
    description: string;  // about place, hotel
    images: string[];     // Gallery
    facilities: Facility[]; // Wifi, parking, pool
    rating: number;
    treasures: Treasure[];
}

export interface Treasure {
    name: string;
    category: string;
    image: string;
    isPopular?: boolean;
}

export interface Facility {
    name: string;
    icon: string;
}