import { Component, Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

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

    this.mostrarLoader = true;

    // Agrega la clase no-scroll al body
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');

    setTimeout(() => {
      this.mostrarLoader = false;
      this.renderer.removeStyle(this.document.body, 'overflow');
    }, 1400);
  }
}
