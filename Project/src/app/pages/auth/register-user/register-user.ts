import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.css']
})
export class RegisterUser {
  name = '';
  email = '';
  phone = '';
  country = '';
  username = '';
  password = '';
  showPassword = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onRegister(): void {
    this.errorMessage = '';

    if (!this.username.trim() || !this.email.trim() || !this.password) {
      this.errorMessage = 'Username, email, and password are required.';
      return;
    }

    this.isLoading = true;
    this.auth.register({
      username: this.username.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
      password: this.password,
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Registration failed. Please try again.';
      },
    });
  }
}
