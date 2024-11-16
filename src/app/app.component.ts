import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isModalOpen = false; // Controla si el modal está abierto o cerrado
  selectedProductId: number | null = null;  // Almacena el ID del producto seleccionado

  // Método que se activa cuando `openModal` es emitido
  showContactForm(productId: number) {
    this.selectedProductId = productId; // Guarda el ID
    this.isModalOpen = true; // Abre el modal
    console.log(this.selectedProductId);
    console.log(this.isModalOpen);

  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedProductId = null;
  }
}
