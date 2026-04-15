import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },

  { path: 'hotels/:id', loadComponent: () => import('./pages/hotel-details/hotel-details').then(m => m.HotelDetails) },

  { path: 'booking', loadComponent: () => import('./pages/booking/booking-info/booking-info').then(m => m.BookingInfo) },
  { path: 'payment', loadComponent: () => import('./pages/booking/payment/payment').then(m => m.Payment) },
  { path: 'payment-success', loadComponent: () => import('./pages/booking/payment-success/payment-success').then(m => m.PaymentSuccess) },

  { path: 'login', loadComponent: () => import('./pages/auth/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./pages/auth/register-user/register-user').then(m => m.RegisterUser) },
  { path: 'register-owner', loadComponent: () => import('./pages/auth/register-owner/register-owner').then(m => m.RegisterOwner) },

  { path: 'dashboard/admin', loadComponent: () => import('./pages/dashboard/admin/admin').then(m => m.Admin) },
  { path: 'dashboard/owner', loadComponent: () => import('./pages/dashboard/owner/owner').then(m => m.Owner) },
  { path: 'dashboard/user', loadComponent: () => import('./pages/dashboard/user/user').then(m => m.User) },

  { path: '**', redirectTo: 'home' }
];
