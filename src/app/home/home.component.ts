import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isModalOpen = false;
  selectedProductId: number | null = null;
  alertSuccess = false;
  alertError = false;

  showContactForm(productId: number) {
    this.selectedProductId = productId;
    this.isModalOpen = true;
    console.log(this.selectedProductId);
    console.log(this.isModalOpen);

  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedProductId = null;
  }

  showAlert(type: 'success' | 'error') {
    console.log('showAlert triggered with:', type)
    if (type === 'success') {
      this.alertSuccess = true;
    } else if (type === 'error') {
      this.alertError = true;
    }

    setTimeout(() => {
      if (type === 'success') this.alertSuccess = false;
      if (type === 'error') this.alertError = false;
    }, 15000);
  }

  closeAlert(type: 'success' | 'error') {
    if (type === 'success') this.alertSuccess = false;
    if (type === 'error') this.alertError = false;
  }
}
