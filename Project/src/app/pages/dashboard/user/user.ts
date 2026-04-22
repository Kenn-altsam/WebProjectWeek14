import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Auth, AuthUser } from '../../../services/auth';

@Component({
  selector: 'app-user',
  imports: [CommonModule, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user: AuthUser | null = null;
  errorMessage = '';
  isLoading = true;

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {
    this.auth.me().subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: () => {
        this.auth.clearSession();
        this.isLoading = false;
        this.errorMessage = 'Please log in to view your profile.';
      },
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
