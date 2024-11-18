import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Input() productId: number | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() alertEvent = new EventEmitter<'success' | 'error'>();
  isOpen = false;
  isSubmitting = false;
  

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private emailService: EmailService,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      companyName: ['', Validators.required],
      country: ['', Validators.required],
      interestProduct: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  ngOnChanges() {
    if (this.productId && this.contactForm) {
      this.contactForm.patchValue({ interestProduct: this.productId });
      this.isOpen = true;
    }
  }

  closeModal() {
    this.isOpen = false;
    this.contactForm.reset();
    this.close.emit();
    this.isSubmitting = false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formValues = this.contactForm.value;
      const number = this.generaNss();

      const productMap: { [key: number]: string } = {
        1: 'Geomarketing',
        2: 'Datarutas',
        3: 'Dataquality'
      };
      const interestProductValue = productMap[formValues.interestProduct];

      const body_email = `
      Estimado/a ${formValues.name},

      Agradecemos que se haya puesto en contacto con Servinformación. Hemos recibido su mensaje y los detalles proporcionados:

      Nombre: ${formValues.name}
      Empresa: ${formValues.companyName}
      Teléfono: ${formValues.contactNumber}
      Correo Electrónico: ${formValues.email}
      Mensaje: ${formValues.message}
      Producto Elegido: ${interestProductValue}
      País: ${formValues.country}

      Hemos asignado el Número de Radicado: ${number} para dar seguimiento a su solicitud. Uno de nuestros asesores se pondrá en contacto con usted en breve para atender su requerimiento.

      Quedamos a su disposición para cualquier consulta adicional.

      Saludos cordiales,
      Equipo de Atención al Cliente
      Servinformación
      `

      const emailData = {
        to_email: formValues.email,
        subject: `Confirmación de Recepción de su Mensaje – Número de Radicado: ${number}`,
        body: body_email
      };

      this.emailService.sendEmail(emailData).subscribe(
        response => {
          console.log('Email sent successfully', response);
          this.alertEvent.emit('success');
          console.log('Event emitted: success');
          this.closeModal();
        },
        error => {
          console.error('Error sending email', error);
          this.alertEvent.emit('error');
          this.isSubmitting = false;
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.contactForm.get(controlName)?.hasError(errorType) &&
      this.contactForm.get(controlName)?.touched
    );
  }

  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * 5));
    }

    return result;
  }
}
