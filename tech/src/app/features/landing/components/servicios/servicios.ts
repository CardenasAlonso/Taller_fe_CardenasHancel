import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Servicio {
  titulo: string;
  descripcion: string;
  svgIcon: SafeHtml;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {

  private readonly sanitizer = inject(DomSanitizer);

  tituloSeccion: string = 'Nuestros Servicios Tech';
  servicios: Servicio[];

  constructor() {
    this.servicios = [
      {
        titulo: 'Desarrollo Web & Apps',
        descripcion: 'Construimos soluciones digitales a medida utilizando arquitecturas modernas y escalables.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160zm0-80h640v-400H160v400zm200-80 140-140-140-140-56 56 84 84-84 84 56 56zm240 0 56-56-84-84 84-84-56-56-140 140 140 140z"/>
          </svg>
        `)
      },
      {
        titulo: 'Transformación Cloud',
        descripcion: 'Migración y optimización de infraestructura en entornos e infraestructuras en la nube.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
            <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520v13h-20q-58 0-99 41t-41 99q0 58 41 99t99 41z"/>
          </svg>
        `)
      },
      {
        titulo: 'Inteligencia Artificial',
        descripcion: 'Integración de modelos predictivos, agentes y automatización de procesos empresariales.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
            <path d="M440-120v-80h80v80h-80zm0-160v-100q-53-15-86.5-57.5T320-530q0-66 47-113t113-47q66 0 113 47t47 113q0 49-33.5 91.5T520-380v100h-80zm40-200q33 0 56.5-23.5T560-540q0-33-23.5-56.5T480-620q-33 0-56.5 23.5T400-540q0 33 23.5 56.5T480-480z"/>
          </svg>
        `)
      },
      {
        titulo: 'Ciberseguridad',
        descripcion: 'Auditorías de seguridad, protección de infraestructura y aseguramiento de datos.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
            <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132z"/>
          </svg>
        `)
      }
    ];
  }
}