import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent  implements OnInit {
  public mostrarLoader: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.mostrarLoader = true;

    // Agrega la clase no-scroll al body
    this.renderer.setStyle(document.body, 'overflow', 'hidden');

    setTimeout(() => {
      this.mostrarLoader = false;

      this.renderer.removeStyle(document.body, 'overflow');
    }, 2000);
  }
}
