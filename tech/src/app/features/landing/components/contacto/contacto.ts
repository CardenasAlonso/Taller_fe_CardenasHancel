import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  tituloSeccion: string = 'Contáctanos';

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    this.formData = { nombre: '', email: '', mensaje: '' };
  }
}