import { Component, EventEmitter, Output } from '@angular/core';

interface ProyectoFormal {
  title: string;
  description: string;
  image: string;
  client: string;
  tags: string[];
  link: string;
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
      image: '../../assets/images/proyectos/formales/proyecto01.webp',
      client: 'Edgar Enrique Calderón Ramírez',
      tags: ['Angular', 'HTML5', 'CSS3', 'GIT'],
      link: 'https://ironcore.netlify.app/',
    },
  ];
}
