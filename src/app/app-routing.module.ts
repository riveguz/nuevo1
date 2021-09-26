import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { PaginanoexisteComponent } from './paginas/paginanoexiste/paginanoexiste.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'noticias', component: NoticiasComponent},
  {path:'contactos', component:ContactosComponent },
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**',component: PaginanoexisteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
