import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'; //ng add @angular/material
import { MatIconModule } from '@angular/material/icon'; //ng add @angular/material
import { MatButtonModule } from '@angular/material/button'; //ng add @angular/material>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CirclesComponent } from './banner-circles/circles.component';
import { AboutComponent } from './about/about.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { ServicesComponent } from './services/services.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { ProyectosFormalesComponent } from './proyectos-formales/proyectos-formales.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    CirclesComponent,
    AboutComponent,
    LenguajesComponent,
    AboutCardComponent,
    ProyectosComponent,
    ContactComponent,
    FormComponent,
    FooterComponent,
    CommentsComponent,
    ServicesComponent,
    TestimoniosComponent,
    WhatsappButtonComponent,
    ProyectosFormalesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
