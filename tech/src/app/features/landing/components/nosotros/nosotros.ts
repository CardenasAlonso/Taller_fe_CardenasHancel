import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros {
  tituloSeccion: string = 'Sobre Nosotros';
  descripcion: string = 'Somos una agencia especializada en desarrollo de software moderno e infraestructura en la nube. Acompañamos a empresas en su proceso de innovación tecnológica con altos estándares de calidad.';
  
  estadisticas = [
    { cifra: '+50', etiqueta: 'Proyectos Entregados' },
    { cifra: '+98%', etiqueta: 'Clientes Satisfechos' },
    { cifra: '5+', etiqueta: 'Años de Experiencia' }
  ];
}