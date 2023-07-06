import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  scrollToComponent(elementId: string): void {
    this.scrollEvent.emit(elementId);
  }
}
