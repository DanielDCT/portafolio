import { Component, AfterViewInit } from '@angular/core';

declare let DISQUS: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof DISQUS !== 'undefined') {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = 'https://portafoliodanieldct.netlify.app/'; // URL canónica de la página
          this.page.identifier = '3106894061'; // Identificador único de la página
          this.page.enableReaction = false; // Desactiva las reacciones
        }
      });
    }
  }
}
