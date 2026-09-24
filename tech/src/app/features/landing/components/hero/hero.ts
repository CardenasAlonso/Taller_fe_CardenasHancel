import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  titulo: string = 'Impulsamos el Futuro Digital de tu Empresa';
  subtitulo: string = 'Desarrollamos soluciones tecnológicas a medida, infraestructura en la nube y estrategias de Inteligencia Artificial.';
}