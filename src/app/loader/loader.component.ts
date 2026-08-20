import { Component, Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public mostrarLoader: boolean = true;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.mostrarLoader = false;
      return;
    }

    const staticLoader = this.document.getElementById('static-loader');

    if (staticLoader) {
      // El static loader del index.html ya está visible — lo dejamos actuar y lo retiramos
      // sin activar el loader de Angular (evita que se vea doble)
      this.mostrarLoader = false;
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');

      setTimeout(() => {
        staticLoader.style.transition = 'opacity 0.5s ease';
        staticLoader.style.opacity = '0';
        setTimeout(() => staticLoader.remove(), 500);
        this.renderer.removeStyle(this.document.body, 'overflow');
      }, 1400);

      return;
    }

    // Sin static loader (p.ej. navegación interna): usar el loader de Angular normalmente
    this.mostrarLoader = true;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');

    setTimeout(() => {
      this.mostrarLoader = false;
      this.renderer.removeStyle(this.document.body, 'overflow');
    }, 1400);
  }
}
