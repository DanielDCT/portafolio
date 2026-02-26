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
    setTimeout(() => {
      this.mostrarLoader = false;
    }, 1200); // Menos tiempo, no bloquea scroll
  }
}
