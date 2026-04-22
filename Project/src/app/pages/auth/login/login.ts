import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.errorMessage = '';

    if (!this.username.trim() || !this.password) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    this.isLoading = true;
    this.auth.login({
      username: this.username.trim(),
      password: this.password,
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard/user']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Login failed. Please try again.';
      },
    });
  }
}
