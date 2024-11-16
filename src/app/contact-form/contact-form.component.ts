import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Input() productId: number | null = null;
  @Output() close = new EventEmitter<void>();
  isOpen = false;

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.closeModal();
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
}
