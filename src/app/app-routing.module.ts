import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { AgregarComponent } from './componets/equipo/agregar/agregar.component';

const routes: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: '', redirectTo: 'home', pathMatch:'full' },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
