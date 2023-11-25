import { Component, OnInit } from '@angular/core';

// Definición de la interfaz para los testimonios
interface Testimonio {
  imagen: any;
  nombre: string;
  cargo: string;
  mensaje: string;
  web: string;
  titleImg: string;
  altImg: string;
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
      cargo: 'Entrenador Personal',
      mensaje: '¡Gran trabajo en el diseño de mi web! Me gustó bastante el resultado. Hizo que mi sitio web sea genial y fácil de usar. ¡Gracias por hacer que mi presencia en línea sea genial y por tu paciencia durante todo el proceso!',
      web: 'https://ironcore.netlify.app/',
      titleImg: 'Foto de Enrique Calderón',
      altImg: 'Foto de Enrique Calderón',
    },
    { 
      imagen: '../../assets/images/testimonios/foto02.webp', 
      nombre: 'Erick Ramírez', 
      cargo: 'Rep. FincaRaíz R&H',
      mensaje: 'El diseño que desarrolló no solo es atractivo, sino que también capturó perfectamente la esencia de nuestra marca. ¡Gracias a su talento, ahora tenemos una presencia en línea que realmente nos destaca!',
      web: 'https://fincaraizrh.netlify.app/',
      titleImg: 'Foto de Erick Ramírez',
      altImg: 'Foto de Erick Ramírez',
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
