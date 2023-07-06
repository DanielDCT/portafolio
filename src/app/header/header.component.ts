import { Component, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  navbarScrolled: boolean = false;

  constructor(private elementRef: ElementRef) {}
  // Esto bloque es para para emitir el identificador del elemento al que se desea desplazar en lugar del elemento en sí
  @Output() scrollEvent = new EventEmitter<string>();

  scrollToComponent(elementId: string): void {
    this.scrollEvent.emit(elementId);
  }

  // ********************************************************

  // Este método se ejecuta cuando se realiza el evento 'scroll' en la ventana
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbarElement = this.elementRef.nativeElement.querySelector('#navbar');

    if (scrollPosition > 0) {
      this.navbarScrolled = true;
    } else {
      this.navbarScrolled = false;
    }
  }

}
