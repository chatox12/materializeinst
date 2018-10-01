import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  /** 
   * variables para comprobar que se mostrara
  */
  mostrar_inscripcion: boolean = false;
  mostrar_listado_alumno: boolean = false;
  constructor() {

    this.function_mostar_div(1);
   }



/**
 * function mostar formularios
 */
  function_mostar_div(seleccion: number){
    switch(seleccion){
      case 1: 
            this.mostrar_inscripcion = true;
            this.mostrar_listado_alumno = false;
            break;
      case 2:
          this.mostrar_inscripcion = false;
          this.mostrar_listado_alumno = true;
          break;
      default:
          this.mostrar_inscripcion = true;
          this.mostrar_listado_alumno = false;
          break;
    }
  }




  ngOnInit() {
  }

}
