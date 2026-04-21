import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-owner.html',
  styleUrl: './register-owner.css',
})
export class RegisterOwner {
  private auth = inject(Auth);
  private router = inject(Router);

  username = '';
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.auth.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.auth.saveUserId(response.user_id);
        this.successMessage = 'Owner registration successful';
        this.router.navigate(['/dashboard/owner']);
      },
      error: () => {
        this.errorMessage = 'Registration failed';
      }
    });
  }
}
