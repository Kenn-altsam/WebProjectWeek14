import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-owner.html',
  styleUrls: ['./register-owner.css']
})
export class RegisterOwner {
  name: string = '';
  email: string = '';
  phoneNo: string = '';
  country: string = '';
  nic: string = '';
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  hotelName: string = '';
  registrationNo: string = '';
  address: string = '';
  uploadImages: string = '';
  uploadDocuments: string = '';
  facilities: string = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  register(): void {
    console.log({
      name: this.name,
      email: this.email,
      phoneNo: this.phoneNo,
      country: this.country,
      nic: this.nic,
      username: this.username,
      password: this.password,
      hotelName: this.hotelName,
      registrationNo: this.registrationNo,
      address: this.address,
      uploadImages: this.uploadImages,
      uploadDocuments: this.uploadDocuments,
      facilities: this.facilities
    });
  }

  goToLogin(): void {
    console.log('Navigate to login');
  }
}