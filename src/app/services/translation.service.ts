import { Injectable, PLATFORM_ID, Inject, Optional } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SSR_I18N } from '../tokens/ssr-i18n.token';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>(this.getStoredLanguage());
  private translations = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(SSR_I18N) private ssrI18n: { [key: string]: any } | null
  ) {
    this.loadLanguage(this.currentLanguage.value);
  }

  // Obtiene el idioma almacenado en localStorage o el idioma del navegador
  private getStoredLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('language');
      if (stored) {
        return stored;
      }
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'es'; // Idioma por defecto en SSR
  }

  // Carga el archivo JSON del idioma seleccionado
  private loadLanguage(lang: string): void {
    // En SSR: usar datos precargados desde el filesystem
    if (!isPlatformBrowser(this.platformId) && this.ssrI18n?.[lang]) {
      this.translations.next(this.ssrI18n[lang]);
      this.currentLanguage.next(lang);
      return;
    }

    this.http.get(`./assets/i18n/${lang}.json`).subscribe(
      (data) => {
        this.translations.next(data);
        this.currentLanguage.next(lang);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('language', lang);
        }
      },
      (error) => {
        console.error(`Error cargando idioma ${lang}:`, error);
        // Fallback a inglés si hay error
        if (lang !== 'en') {
          this.loadLanguage('en');
        }
      }
    );
  }

  // Cambia el idioma actual
  setLanguage(lang: string): void {
    this.currentLanguage.next(lang);
    this.loadLanguage(lang);
  }

  // Obtiene el idioma actual
  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  // Observable del idioma actual
  getLanguage$(): Observable<string> {
    return this.currentLanguage.asObservable();
  }

  // Obtiene una traducción por clave (ej: 'navbar.about')
  get(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations.value;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna la clave si no encuentra la traducción
      }
    }

    return value || key;
  }

  // Observable de las traducciones actuales
  getTranslations$(): Observable<any> {
    return this.translations.asObservable();
  }

  // Toggle entre español e inglés
  toggleLanguage(): void {
    const newLang = this.currentLanguage.value === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  // Obtiene todas las traducciones actuales
  getAll(): any {
    return this.translations.value;
  }
}
