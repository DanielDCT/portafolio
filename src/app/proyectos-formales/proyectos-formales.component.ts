import { Component, EventEmitter, Output } from '@angular/core';

interface ProyectoFormal {
  title: string;
  description: string;
  image: string;
  client: string;
  tags: string[];
  link: string;
  altImg: string;
  titleImg: string;
}

@Component({
  selector: 'app-proyectos-formales',
  templateUrl: './proyectos-formales.component.html',
  styleUrls: ['./proyectos-formales.component.css']
})
export class ProyectosFormalesComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  scrollToComponent(elementId: string): void {
    this.scrollEvent.emit(elementId);
  }

  proyectos: ProyectoFormal[] = [
    {
      title: 'Iron Core',
      description: 'IronCore es una pagina web diseñada para promocionar los servicios de entrenamiento personal. Con un diseño moderno y atractivo, incluye testimonios de clientes satisfechos y facilita el contacto con el entrenador.',
      image: '../../assets/images/proyectos/formales/proyectof01.webp',
      client: 'Edgar Enrique Calderón Ramírez',
      tags: ['Angular', 'HTML5', 'CSS3', 'GIT'],
      link: 'https://ironcore.netlify.app/',
      altImg: 'Iron Core',
      titleImg: 'Iron Core',
    },
    {
      title: 'Finca Raíz R&H',
      description: 'Finca Raíz R&H es una web que tiene como objetivo exponer Fincas, casas y quintas disponibles en la ciudad de Villeta Cundinamarca, tiene un diseño moderno y simple con un formulario de contacto funcional',
      image: '../../assets/images/proyectos/formales/proyectof02.webp',
      client: 'Erick Leonardo Ramírez',
      tags: ['Angular', 'HTML5', 'CSS3', 'GIT'],
      link: 'https://fincaraizrh.netlify.app/',
      altImg: 'Finca Raíz R&H',
      titleImg: 'Finca Raíz R&H',
    },
  ];
}
