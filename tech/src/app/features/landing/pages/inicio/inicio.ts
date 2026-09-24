import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Servicios } from '../../components/servicios/servicios';
import { Nosotros } from '../../components/nosotros/nosotros';
import { Contacto } from '../../components/contacto/contacto';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Servicios,
    Nosotros,
    Contacto,
    Footer
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {}