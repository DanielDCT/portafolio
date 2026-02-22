import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    // Suscribirse a cambios de traducciones (cuando se cargan o cuando cambia el idioma)
    this.translationService.getTranslations$().subscribe((translations) => {
      if (translations && Object.keys(translations).length > 0) {
        this.loadServices();
      }
    });
  }

  private loadServices(): void {
    const translations = this.translationService.getAll();
    this.services = translations?.services?.items || [];
  }
}
