import { Component } from '@angular/core';
import { getIconPath } from '../icons/icons';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  icons = {
    whatsapp:  getIconPath('whatsapp'),
    github:    getIconPath('github'),
    facebook:  getIconPath('facebook'),
    instagram: getIconPath('instagram'),
    twitter:   getIconPath('twitter'),
    linkedin:  getIconPath('linkedin'),
  };
}
