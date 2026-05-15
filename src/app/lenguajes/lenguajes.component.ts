import { Component } from '@angular/core';
import { getIconPath, IconKey } from '../icons/icons';

interface Lenguaje {
  key: IconKey;
  nombre: string;
  path: string;
}

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent {
  lenguajes: Lenguaje[] = (
    [
      { key: 'angular'    as IconKey, nombre: 'Angular'    },
      { key: 'html5'      as IconKey, nombre: 'HTML5'      },
      { key: 'css3'       as IconKey, nombre: 'CSS3'       },
      { key: 'git'        as IconKey, nombre: 'Git'        },
      { key: 'javascript' as IconKey, nombre: 'JavaScript' },
      { key: 'bootstrap'  as IconKey, nombre: 'Bootstrap'  },
      { key: 'mysql'      as IconKey, nombre: 'MySQL'      },
      { key: 'php'        as IconKey, nombre: 'PHP'        },
      { key: 'ajax'       as IconKey, nombre: 'AJAX'       },
      { key: 'jquery'     as IconKey, nombre: 'jQuery'     },
      { key: 'tailwind'   as IconKey, nombre: 'Tailwind'   },
      { key: 'typescript' as IconKey, nombre: 'TypeScript' },
    ]
  ).map(l => ({ ...l, path: getIconPath(l.key) }));
}
