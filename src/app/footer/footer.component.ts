import { Component } from '@angular/core';
import { getIconPath } from '../icons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  icons = {
    facebook:  getIconPath('facebook'),
    whatsapp:  getIconPath('whatsapp'),
    instagram: getIconPath('instagram'),
  };
}
