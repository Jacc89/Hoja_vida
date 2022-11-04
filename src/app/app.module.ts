import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componets/home/home.component';
import { AgregarComponent } from './componets/equipo/agregar/agregar.component';
import { ListarComponent } from './componets/equipo/listar/listar.component';
import { EliminarComponent } from './componets/equipo/eliminar/eliminar.component';
import { EditarComponent } from './componets/equipo/editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarComponent,
    ListarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
