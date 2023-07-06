import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent {
  lenguajes: { icono: string, nombre: string }[] = [
    { icono: 'fab fa-angular', nombre: 'Angular' },
    { icono: 'fab fa-html5', nombre: 'HTML5' },
    { icono: 'fab fa-css3-alt', nombre: 'CSS3' },
    { icono: 'fab fa-git', nombre: 'Git' },
    { icono: 'fab fa-js', nombre: 'JavaScript' },
    { icono: 'fab fa-bootstrap', nombre: 'Bootstrap' },
    { icono: 'fas fa-database', nombre: 'MySQL' },
    { icono: 'fab fa-php', nombre: 'PHP' }
  ];
}
