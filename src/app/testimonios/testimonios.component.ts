import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

// Definición de la interfaz para los testimonios
interface Testimonio {
  nombre: string;
  cargo: string;
  mensaje: string;
  imagen: any;
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
  testimonios: Testimonio[] = [];

  testimonioActual = 0;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    // Suscribirse a cambios de traducciones (cuando se cargan o cuando cambia el idioma)
    this.translationService.getTranslations$().subscribe((translations) => {
      if (translations && Object.keys(translations).length > 0) {
        this.loadTestimonials();
      }
    });
  }

  private loadTestimonials(): void {
    const translations = this.translationService.getAll();
    const items = translations?.testimonials?.items || [];
    
    // Mapear los datos con las imágenes
    this.testimonios = items.map((item: any, index: number) => ({
      nombre: item.name,
      cargo: item.role,
      mensaje: item.message,
      imagen: index === 0 ? '../../assets/images/testimonios/foto01.webp' : '../../assets/images/testimonios/foto02.webp',
      web: index === 0 ? 'https://ironcore.netlify.app/' : 'https://fincaraizrh.netlify.app/',
      titleImg: item.name,
      altImg: item.name,
    }));
  }

  siguienteTestimonio() {
    this.testimonioActual = (this.testimonioActual + 1) % this.testimonios.length;
  }

  anteriorTestimonio() {
    this.testimonioActual = (this.testimonioActual - 1 + this.testimonios.length) % this.testimonios.length;
  }
}
