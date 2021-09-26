import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { LoginComponent } from './paginas/login/login.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { PaginanoexisteComponent } from './paginas/paginanoexiste/paginanoexiste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    LoginComponent,
    ContactosComponent,
    PaginanoexisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
