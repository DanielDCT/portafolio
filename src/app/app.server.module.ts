import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { readFileSync } from 'fs';
import { join } from 'path';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { SSR_I18N } from './tokens/ssr-i18n.token';

function loadI18nForSsr(): { [key: string]: any } {
  try {
    const base = join(process.cwd(), 'dist/portafolio/assets/i18n');
    return {
      es: JSON.parse(readFileSync(join(base, 'es.json'), 'utf-8')),
      en: JSON.parse(readFileSync(join(base, 'en.json'), 'utf-8')),
    };
  } catch {
    return {};
  }
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: SSR_I18N, useFactory: loadI18nForSsr },
  ],
})
export class AppServerModule {}
