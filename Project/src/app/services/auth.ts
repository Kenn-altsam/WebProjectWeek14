import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthResponse {
  token: string;
  user_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/auth';

  login(data: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login/`, data);
  }

  register(data: { username: string; email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register/`, data);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveUserId(userId: number): void {
    localStorage.setItem('user_id', String(userId));
  }

  getUserId(): number | null {
    const value = localStorage.getItem('user_id');
    return value ? Number(value) : null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}