import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form.component';
import { HomeComponent } from '../home/home.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [ReactiveFormsModule,HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: HomeComponent },
        FormBuilder
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('debe crear el ContactFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debe crear un formulario de contacto válido', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm instanceof FormGroup).toBeTruthy();
    expect(component.contactForm.get('name')).toBeDefined();
    expect(component.contactForm.get('lastname')).toBeDefined();
    expect(component.contactForm.get('email')).toBeDefined();
    expect(component.contactForm.get('contactNumber')).toBeDefined();
    expect(component.contactForm.get('companyName')).toBeDefined();
    expect(component.contactForm.get('country')).toBeDefined();
    expect(component.contactForm.get('interestProduct')).toBeDefined();
    expect(component.contactForm.get('message')).toBeDefined();
  });

  it('debe marcar los campos message y companyName como inválidos cuando están vacíos', () => {
    const messageControl = component.contactForm.get('message');
    const companyNameControl = component.contactForm.get('companyName');

    expect(messageControl?.invalid).toBeTruthy();
    expect(companyNameControl?.invalid).toBeTruthy();
  });

  it('debe marcar el campo email como inválido con una dirección de correo electrónico inválida', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('test');
    fixture.detectChanges();
    expect(emailControl?.invalid).toBeTruthy();
  });

  it('debe marcar el campo email como válido con una dirección de correo electrónico válida', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('test@example.com');
    fixture.detectChanges();
    expect(emailControl?.valid).toBeTruthy();
  });

  it('debe marcar el campo contactNumber como inválido si se proporciona valores distinto a números', () => {
    const contactNumberControl = component.contactForm.get('contactNumber');
    contactNumberControl?.setValue('ABC123');
    fixture.detectChanges();
    expect(contactNumberControl?.invalid).toBeTruthy();
  });

  it('debe marcar el campo contactNumber como válido si se proporciona valores numéricos', () => {
    const contactNumberControl = component.contactForm.get('contactNumber');
    contactNumberControl?.setValue('123456');
    fixture.detectChanges();
    expect(contactNumberControl?.valid).toBeTruthy();
  });


  it('debe llamar a la función onSubmit cuando el formulario se envía con datos válidos', () => {
    spyOn(component, 'onSubmit');

    const nameControl = component.contactForm.get('name')
    const lastnameControl = component.contactForm.get('lastname')
    const emailControl = component.contactForm.get('email')
    const contactNumberControl = component.contactForm.get('contactNumber')
    const companyNameControl = component.contactForm.get('companyName')
    const countryControl = component.contactForm.get('country')
    const interestProduct = component.contactForm.get('interestProduct')
    const messageControl = component.contactForm.get('message')

    nameControl?.setValue('Test name');
    lastnameControl?.setValue('Test lastname');
    emailControl?.setValue('test@example.com');
    contactNumberControl?.setValue('123456789');
    companyNameControl?.setValue('Test Company');
    countryControl?.setValue('Colombia');
    interestProduct?.setValue('Geomarketing');
    messageControl?.setValue('Lorem ipsum dolor sit amet consectetur.');

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
