import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  
  //variables para la insercion
  Var_grado: number;
  var_seccion: number;


  //Seleccion de grado
  Seleccion_grado: boolean = false;

  //seleccion para la seccion 
  Seleccion_seccion: boolean = false;
  //ingreso de notas
  seleccion: boolean = false;

  constructor() {
    this.Function_seleccion_seccion(0);
   }
  
   //para la seleccion de grado
   Fuction_seleccion_grado(Estado:number){
     if(Estado > 0){
      this.Seleccion_grado = true;
      console.log(Estado);
     }
     else{
      this.Seleccion_grado = false;
     }

   }

   //para la seleccion de la seccion
   Function_seleccion_seccion(Estado:number){
    if(Estado > 0){
      console.log(Estado);
      this.Seleccion_seccion = true;
    }
    else{
      this.Seleccion_seccion = false;
    }
    
   }

   //para mostrar las notas
  Mostrar_inicio(Estado: boolean){
    this.seleccion = Estado;
  }

  ngOnInit() {
  }

}
