import { Hotel } from "./hotel.model";

export interface Booking {
    id: number;
    user_id: number;
    hotel: Hotel;
    check_in: Date;
    check_out: Date;
    days: number;
    total_amount: number;
  }