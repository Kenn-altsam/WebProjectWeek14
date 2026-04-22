import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  currentUser$;

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {
    this.currentUser$ = this.auth.currentUser$;

    if (this.auth.isAuthenticated()) {
      this.auth.me().subscribe({
        error: () => this.auth.clearSession(),
      });
    }
  }

  logout(): void {
    this.auth.logout().subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => {
        this.auth.clearSession();
        this.router.navigate(['/home']);
      },
    });
  }
}
