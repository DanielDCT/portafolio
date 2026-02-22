import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslationService } from '../services/translation.service';

interface Proyecto {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  altImg: string;
  titleImg: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    // Definición de la animación 'fadeIn'
    trigger('fadeIn', [
      // Transición para cuando el elemento se muestra
      transition(':enter', [
        // Estilo inicial del elemento: opacidad 0 (invisible)
        style({ opacity: 0 }),
        // Animación para cambiar la opacidad del elemento a 1 (visible)
        animate('200ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class ProyectosComponent implements OnInit {
  // Cantidad inicial de tarjetas visibles
  visibleCardsCount = 12;
  // Cantidad de tarjetas a agregar al hacer clic en "Cargar más"
  cardsIncrement = 8;
  // Lista de proyectos
  proyectos: Proyecto[] = [];
  private loaded = false;

  // Datos estáticos con images, links y tags (no se traducen)
  private projectsData = [
    {
      image: '../../assets/images/proyectos/personales/tercer-portafolio.webp',
      tags: ['ANGULAR', 'TS', 'HTML5' ,'CSS', 'GIT'],
      link: 'https://portafoliodanieldct.netlify.app/',
      altImg: 'Portafolio Daniel David Calderón Tinjaca',
      titleImg: 'Portafolio Daniel David Calderón Tinjaca',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto16.webp',
      tags: ['HTML5' ,'CSS', 'JAVASCRIPT'],
      link: 'https://danieldct.github.io/lista-de-tareas/',
      altImg: 'Lista de Tareas',
      titleImg: 'Lista de Tareas',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto15.webp',
      tags: ['ANGULAR', 'TS', 'HTML5' ,'CSS'],
      link: 'https://pokeapidaniel.netlify.app/',
      altImg: 'PokeApi',
      titleImg: 'PokeApi',
    },
    {
      image: '../../assets/images/proyectos/personales/segundo-portafolio.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/segundo-portafolio/',
      altImg: 'Segundo Portafolio',
      titleImg: 'Segundo Portafolio',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto14.webp',
      tags: ['Angular', 'HTML5', 'CSS', 'GIT'],
      link: 'https://ironcore.netlify.app/',
      altImg: 'Iron Core',
      titleImg: 'Iron Core',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto13.webp',
      tags: ['Angular', 'HTML5', 'CSS', 'GIT'],
      link: 'https://panadela.netlify.app/',
      altImg: 'Panadela',
      titleImg: 'Panadela',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto12.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://opticalia.netlify.app/',
      altImg: 'Opticalia',
      titleImg: 'Opticalia',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto11.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/traveling/',
      altImg: 'Traveling',
      titleImg: 'Traveling',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto10.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/fotography/',
      altImg: 'Portafolio Fotográfico',
      titleImg: 'Portafolio Fotográfico',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto09.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/hamburking/',
      altImg: 'Hamburking',
      titleImg: 'Hamburking',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto07.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/world-fitness/',
      altImg: 'World Fitness',
      titleImg: 'World Fitness',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto05.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/tributo-chester-bennington/',
      altImg: 'Tributo Chester Bennington',
      titleImg: 'Tributo Chester Bennington',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto06.webp',
      tags: ['HTML5', 'CSS', 'GIT'],
      link: 'https://danieldct.github.io/login/',
      altImg: 'Login & Signup',
      titleImg: 'Login & Signup',
    },
    {
      image: '../../assets/images/proyectos/personales/primer-portafolio.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/primer-portafolio/',
      altImg: 'Primer Portafolio',
      titleImg: 'Primer Portafolio',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto08.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/calculadora-imc/',
      altImg: 'Calculadora del IMC',
      titleImg: 'Calculadora del IMC',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto03.webp',
      tags: ['HTML5', 'CSS', 'PHP', 'MYSQL', 'GIT'],
      link: 'https://iniciosesionone.000webhostapp.com/login.php',
      altImg: 'Login & Signup PHP',
      titleImg: 'Login & Signup PHP',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto04.webp',
      tags: ['HTML5', 'CSS', 'GIT'],
      link: 'https://danieldct.github.io/relojdigital/',
      altImg: 'Reloj Digital',
      titleImg: 'Reloj Digital',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto02.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/perimes/',
      altImg: 'Perimes',
      titleImg: 'Perimes',
    },
    {
      image: '../../assets/images/proyectos/personales/proyecto01.webp',
      tags: ['HTML5', 'CSS', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/Calculadora-JS/',
      altImg: 'Calculadora Digital',
      titleImg: 'Calculadora Digital',
    },
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // Suscribirse a cambios de traducciones (cuando se cargan o cuando cambia el idioma)
    this.translationService.getTranslations$().subscribe((translations) => {
      if (translations && Object.keys(translations).length > 0) {
        this.loadProjects();
      }
    });
  }

  private loadProjects(): void {
    const translations = this.translationService.getAll();
    const items = translations?.projects?.items || [];
    
    this.proyectos = items.map((item: any, index: number) => ({
      title: item.title,
      description: item.description,
      ...this.projectsData[index]
    }));
  }

  // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
  scrollToComponent(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Método para cargar más tarjetas al hacer clic en "Cargar más"
  loadMoreCards() {
    setTimeout(() => {
      this.visibleCardsCount += this.cardsIncrement;
    }, 200);
  }
}