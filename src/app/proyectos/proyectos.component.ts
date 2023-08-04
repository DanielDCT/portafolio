import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Proyecto {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
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

export class ProyectosComponent {
  // Cantidad inicial de tarjetas visibles
  visibleCardsCount = 12;
  // Cantidad de tarjetas a agregar al hacer clic en "Cargar más"
  cardsIncrement = 8;
  // Método para cargar más tarjetas al hacer clic en "Cargar más"
  loadMoreCards() {
    setTimeout(() => {
      this.visibleCardsCount += this.cardsIncrement;
    }, 200);
  }
  // Lista de proyectos
  proyectos: Proyecto[] = [
    {
      title: 'Lista de Tareas',
      description: 'Organiza tareas con estilo en esta aplicación web minimalista. Agrega y elimina fácilmente. Gestiona tu productividad con simplicidad',
      image: '../../assets/images/proyectos/proyecto16.webp',
      tags: ['HTML5' ,'CSS3', 'JAVASCRIPT'],
      link: 'https://danieldct.github.io/lista-de-tareas/',
    },
    {
      title: 'PokeApi',
      description: 'Explora la API de Pokemon en este sitio web con un buscador funcional y un paginador que facilita la navegación para ver todos los Pokemons disponibles',
      image: '../../assets/images/proyectos/proyecto15.webp',
      tags: ['ANGULAR', 'TS', 'HTML5' ,'CSS3'],
      link: 'https://pokeapidaniel.netlify.app/',
    },
    {
      title: 'Segundo Portafolio',
      description: 'Este es el segundo portafolio que desarrollé para demostrar mis habilidades como programador frontend jr, con un diseño moderno, sencillo, minimalista y atractivo, con un formulario de contacto funcional',
      image: '../../assets/images/proyectos/segundo-portafolio.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/segundo-portafolio/',
    },
    {
      title: 'Iron Core',
      description: 'IronCore es una pagina web diseñada para promocionar los servicios de entrenamiento personal. Con un diseño moderno y atractivo, incluye testimonios de clientes satisfechos y facilita el contacto con el entrenador.',
      image: '../../assets/images/proyectos/proyecto14.webp',
      tags: ['Angular', 'HTML5', 'CSS3', 'GIT'],
      link: 'https://ironcore.netlify.app/',
    },
    {
      title: 'Panadela',
      description: 'Panadela es una pagina web diseñada para promocionar capuchinos. Con un diseño sencillo y atractivo, incluye reseñas de clientes satisfechos y facilita el contacto con el local.',
      image: '../../assets/images/proyectos/proyecto13.webp',
      tags: ['Angular', 'HTML5', 'CSS3', 'GIT'],
      link: 'https://panadela.netlify.app/',
    },
    {
      title: 'Opticalia',
      description: 'Opticalia es una pagina web e-commerce diseñada para promocionar y vender lentes en linea. Con un diseño sencillo y atractivo, incluye reseñas de clientes satisfechos y facilita el contacto con el vendedor.',
      image: '../../assets/images/proyectos/proyecto12.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://opticalia.netlify.app/',
    },
    {
      title: 'Traveling',
      description: 'Traveling es una pagina web para promocionar y mostrar vuelos disponibles dando informacion de los vuelos (No e-commerce). Con un diseño moderno y atractivo, incluye reseñas de clientes satisfechos y facilita el contacto con la agencia.',
      image: '../../assets/images/proyectos/proyecto11.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/traveling/',
    },
    {
      title: 'Portafolio Fotográfico',
      description: 'Este portafolio web desarrollada con el propósito de promocionar los servicios de un fotógrafo, exhibiendo sus capturas más destacadas. Con un diseño moderno y atractivo, incluye reseñas de clientes satisfechos y facilita el contacto con el fotografo.',
      image: '../../assets/images/proyectos/proyecto10.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/fotography/',
    },
    {
      title: 'Hamburking',
      description: 'Hamburking es una pagina web desarrollada con el propósito de promocionar las hamburguesas de un restaurante (No e-commerce). Con un diseño moderno y atractivo, incluye reseñas de clientes satisfechos y facilita el contacto con el restaurante.',
      image: '../../assets/images/proyectos/proyecto09.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/hamburking/',
    },
    {
      title: 'World Fitness',
      description: 'Wold Fitness es una página web diseñada para promocionar los servicios de un gimnasio. Con un diseño sencillo y brinda una forma fácil de contactar con el equipo de entrenadores.',
      image: '../../assets/images/proyectos/proyecto07.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/world-fitness/',
    },
    {
      title: 'Tributo Chester Bennington',
      description: 'Esta página web fue desarrollada en memoria del vocalista de la banda de Linkin Park, Chester Bennington QEPD. Con un diseño sencillo y atractivo.',
      image: '../../assets/images/proyectos/proyecto05.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/tributo-chester-bennington/',
    },
    {
      title: 'Login & Signup',
      description: 'Diseño de un formulario de login y registro minimalista y atractivo. Con el objetivo de que sea agradable a la vista y facil de interactuar/usar',
      image: '../../assets/images/proyectos/proyecto06.webp',
      tags: ['HTML5', 'CSS3', 'GIT'],
      link: 'https://danieldct.github.io/login/',
    },
    {
      title: 'Mi primer Portafolio',
      description: 'Este es el primer portafolio que desarrollé para mostrar mis primeras habilidades y pasos como programador frontend jr, con un diseño sencillo y atractivo',
      image: '../../assets/images/proyectos/primer-portafolio.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/primer-portafolio/',
    },
    {
      title: 'Calculadora del IMC',
      description: 'Esta calculadora web básica ha sido desarrollada con el propósito de calcular el IMC (Indice de Masa Corporal) de una persona. Con un diseño sencillo y fácil de usar.',
      image: '../../assets/images/proyectos/proyecto08.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/calculadora-imc/',
    },
    {
      title: 'Login & Signup PHP',
      description: 'Diseño de un formulario de login y registro minimalista, atractivo y funcional (básico). Con el objetivo de que sea agradable a la vista y facil de interactuar/usar',
      image: '../../assets/images/proyectos/proyecto03.webp',
      tags: ['HTML5', 'CSS3', 'PHP', 'MYSQL', 'GIT'],
      link: 'https://iniciosesionone.000webhostapp.com/login.php',
    },
    {
      title: 'Reloj Digital',
      description: 'Este sitio web es un reloj digital que muestra la hora actual. El diseño es simple y minimalista, lo que hace que sea fácil de leer.',
      image: '../../assets/images/proyectos/proyecto04.webp',
      tags: ['HTML5', 'CSS3', 'GIT'],
      link: 'https://danieldct.github.io/relojdigital/',
    },
    {
      title: 'Perimes',
      description: 'Perimes es una pagina web sencilla y muy basica con contenido relacionado a series, peliculas y animes, con un diseño sencillo con un formulario de contacto funcional que facilita el contacto con el administrador de la web',
      image: '../../assets/images/proyectos/proyecto02.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT' ,'GIT'],
      link: 'https://danieldct.github.io/perimes/',
    },
    {
      title: 'Calculadora Digital',
      description: 'Diseño de una calculadora sencilla, con una funcionalidad básica y sencilla.',
      image: '../../assets/images/proyectos/proyecto01.webp',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GIT'],
      link: 'https://danieldct.github.io/Calculadora-JS/',
    },
  ];
}
