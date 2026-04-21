import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
