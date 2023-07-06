import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  @ViewChild('successModal') successModal!: any;
  modalRef!: NgbModalRef;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid && !this.formSubmitted) {
      this.formSubmitted = true;

      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      this.http
        .post('https://formsubmit.co/ajax/01b7a798d07b7133dd4889eb4bc99e2b', formData)
        .subscribe(
          (response) => {
            console.log('Correo enviado correctamente', response);
            this.modalRef = this.modalService.open(this.successModal, { centered: true });
            this.contactForm.reset(); // Restablecer los valores del formulario a un estado inicial
            this.formSubmitted = false; // Restablecer el estado de formSubmitted a false
          },
          (error) => {
            console.error('Error al enviar el correo', error);
            // Manejar el error en caso de fallo en el envío
            this.formSubmitted = false; // Restablecer el estado de formSubmitted a false en caso de error
          }
        );
    } else {
      // Formulario inválido, mostrar errores o mensajes de validación
    }
  }
}
