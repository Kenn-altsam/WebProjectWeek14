export interface Hotel {
    id: number;
    name: string;
    location: string;
    price: number;
    num_of_rooms: number;
    description: string;  // about place, hotel
    images: string[];     // Gallery
    facilities: string[]; // Wifi, parking, pool
    rating: number;
}