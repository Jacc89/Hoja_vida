import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipo } from '../../../interface/equipo';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formEqui = new FormGroup({
    cod_equipo: new FormControl('', Validators.required),
    nom_equipo: new FormControl('', Validators.required),
    fecha_registro: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    dependencia: new FormControl('', Validators.required),
  })

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.formEqui;
  }
  onSubmit(){
    console.log(this.formEqui.value);
    alert("Cliente creado");
    this.router.navigate(['/agregar']);
    this.formEqui.reset();
  }
  cancelar(){
    this.router.navigate(['/home']);

  }

}
