import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private auth = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';
  errorMessage = '';

  onLogin(): void {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.auth.saveUserId(response.user_id);
        this.router.navigate(['/dashboard/user']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
