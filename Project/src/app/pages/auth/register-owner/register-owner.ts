import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-owner.html',
  styleUrls: ['./register-owner.css']
})
export class RegisterOwner {
  private readonly ownerApplicationKey = 'stay_ease_owner_application';

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
  errorMessage = '';
  isLoading = false;

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  register(): void {
    this.errorMessage = '';

    const requiredFields = [
      ['Name', this.name],
      ['Email', this.email],
      ['Phone number', this.phoneNo],
      ['Country', this.country],
      ['NIC', this.nic],
      ['Username', this.username],
      ['Password', this.password],
      ['Hotel name', this.hotelName],
      ['Registration number', this.registrationNo],
      ['Address', this.address],
    ];
    const missingFields = requiredFields
      .filter(([, value]) => !value.trim())
      .map(([label]) => label);

    if (missingFields.length) {
      this.errorMessage = `${missingFields.join(', ')} ${missingFields.length === 1 ? 'is' : 'are'} required.`;
      return;
    }

    this.isLoading = true;
    this.auth.register({
      username: this.username.trim(),
      email: this.email.trim(),
      phone: this.phoneNo.trim(),
      password: this.password,
    }).subscribe({
      next: () => {
        this.saveOwnerApplication();
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = this.getErrorMessage(error);
      },
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  private saveOwnerApplication(): void {
    localStorage.setItem(this.ownerApplicationKey, JSON.stringify({
      name: this.name.trim(),
      email: this.email.trim(),
      phoneNo: this.phoneNo.trim(),
      country: this.country.trim(),
      nic: this.nic.trim(),
      username: this.username.trim(),
      hotelName: this.hotelName.trim(),
      registrationNo: this.registrationNo.trim(),
      address: this.address.trim(),
      uploadImages: this.uploadImages.trim(),
      uploadDocuments: this.uploadDocuments.trim(),
      facilities: this.facilities.trim(),
    }));
  }

  private getErrorMessage(error: any): string {
    const response = error.error;

    if (!response) {
      return 'Owner registration failed. Please try again.';
    }

    if (typeof response === 'string') {
      return response;
    }

    if (response.error || response.detail) {
      return response.error || response.detail;
    }

    const fieldErrors = Object.entries(response)
      .map(([field, messages]) => `${field}: ${Array.isArray(messages) ? messages.join(' ') : messages}`)
      .join(' ');

    return fieldErrors || 'Owner registration failed. Please try again.';
  }
}
