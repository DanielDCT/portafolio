import { Component, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  navbarScrolled: boolean = false;
  currentLanguage: string = 'es';
  private destroy$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef,
    public translationService: TranslationService
  ) {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  ngOnInit(): void {
    // Suscribirse a cambios de idioma
    this.translationService.getLanguage$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(lang => {
        this.currentLanguage = lang;
      });
  }

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

  // Cierra el menú
  closeMenu(): void {
    this.menuOpen = false;
  }

  // Alterna entre español e inglés
  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  // Navega suavemente a una sección sin cambiar la URL
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Limpia las suscripciones
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

