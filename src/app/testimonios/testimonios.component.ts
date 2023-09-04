import { Component, OnInit } from '@angular/core';

// Definición de la interfaz para los testimonios
interface Testimonio {
  imagen: any;
  nombre: string;
  mensaje: string;
  web: string;
}

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {
  // Array de testimonios utilizando la interfaz Testimonio
  testimonios: Testimonio[] = [
    { 
      imagen: '../../assets/images/testimonios/foto01.webp', 
      nombre: 'Enrique Calderón', 
      mensaje: '¡Gran trabajo en el diseño de mi web! Me gustó bastante el resultado. Hizo que mi sitio web sea genial y fácil de usar. ¡Gracias por hacer que mi presencia en línea sea genial y por tu paciencia durante todo el proceso!',
      web: 'https://ironcore.netlify.app/'
    },
  ];

  testimonioActual = 0;

  constructor() { }

  ngOnInit(): void {
  }

  siguienteTestimonio() {
    this.testimonioActual = (this.testimonioActual + 1) % this.testimonios.length;
  }

  anteriorTestimonio() {
    this.testimonioActual = (this.testimonioActual - 1 + this.testimonios.length) % this.testimonios.length;
  }
}
