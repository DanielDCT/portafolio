import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private meta:Meta) {
    meta.updateTag({property: 'og:image', content: 'https://portafoliodanieldct.netlify.app/assets/logo-portafolio.png'});
    meta.updateTag({property: 'og:title', content: 'Desarrollador Web | Portafolio | Daniel David Calderón Tinjaca'});
    meta.updateTag({property: 'og:type', content: 'website'});
    meta.updateTag({property: 'description', content:'¡Bienvenidos a mi portafolio personal! Explora una colección de mis proyectos personales y habilidades en diversos lenguajes de programación. ¡Espero que disfrutes descubriendo mi trabajo y trayectoria!'});
    meta.updateTag({property: 'copyright', content:'Copyright - Daniel David Calderón Tinjaca'});
    meta.updateTag({property: 'author', content: 'Daniel David Calderón Tinjaca'});
    meta.updateTag({property: 'robots', content:'index, follow'});
    meta.updateTag({property: 'language', content: 'es'});
  }

  // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
  scrollToComponent(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}