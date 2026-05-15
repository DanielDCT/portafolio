import { Component } from '@angular/core';
import { getIconPath } from '../icons/icons';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  whatsappNumber: string = '573213461519';
  whatsappPath: string = getIconPath('whatsapp');
  defaultMessage: string = '¡Hola Daniel! Mi nombre es [Tu Nombre] y estoy interesado en contratar tus servicios como Desarrollador Web Front-End. ¿Podrías proporcionarme más información sobre tus servicios y tarifas? ¡Espero con interés tu respuesta!';

  generateWhatsAppUrl() {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
}
