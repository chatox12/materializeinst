import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  /**
   * para uso del api*/
  load_api: string = 'http://localhost:90/api/';
  /** 
   * variables para comprobar que se mostrara
  */
  mostrar_inscripcion: boolean = false;
  mostrar_listado_alumno: boolean = false;

  /**
   * para seleccionar grado y seccion
   */
  id_grado_asig:number = 0;
  id_seccion_asig:number = 0;
  id_ciclo_escolar:number = 0;
  name_ciclo: string = '';

  constructor(private http: HttpClient) {

    this.function_mostar_div(2);
    this.function_load_data_ciclo();
   }

/**
   * variables a utilizar para cargar la informacion en json 
   */
  load_data: any = {};
  //validar si ya esta cargado con anteriorirad
  bool_load_data: boolean = false;
  bool_update: boolean = false;



  /**laod data seccion */
  id_ciclo: number = 0; 
  nombre_ciclo:string ='';
   
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
          if(this.bool_load_data == false){

            setTimeout(function(){
              $(function(){
                  $('#alumno').DataTable();
                });
            },1000);   
          this.function_load_data();
          }
          else{
            
          }
          break;
      default:
          this.mostrar_inscripcion = true;
          this.mostrar_listado_alumno = false;
          break;
    }
  }



/**
   * funcion para cargar los datos 
   */

  function_load_data(){
    this.http.get(this.load_api+'estudiante').subscribe(
      data=>{
        this.load_data = data;
        console.log(this.load_data);
        this.bool_load_data =true;
      },
      err =>{

      }
    );
  }

  function_load_data_ciclo(){
    this.http.get(this.load_api+'ciclolectivo' ).subscribe(
      data=>{
        if(data != null){
          this.nombre_ciclo = data.ciclo.nombre; 
          this.id_ciclo_escolar = data.ciclo.ciclo;
        }
      },
      err =>{

      }
    );
  }


  function_save(forms: NgForm){



    const parametros = new HttpParams()
    .set('pnombrea', forms.value.pnombrea)
    .set('snombrea', forms.value.snombrea )
    .set('tnombrea', forms.value.tnombrea)
    .set('papellidoa', forms.value.papellidoa )
    .set('sapellidoa',  forms.value.sapellidoa)
    .set('tapellidoa', forms.value.tapellidoa)
    .set('edada', forms.value.edada)
    .set('fnacimiento', forms.value.fnacimiento)
    .set('finscripcion', forms.value.finscripcion) 
    .set('codigomine', forms.value.codigomine)
    .set('idgrado', ''+this.id_grado_asig)
    .set('idseccion',  ''+this.id_seccion_asig)
    .set('idciclo',  ''+this.id_ciclo_escolar)
    .set('pnombree', forms.value.pnombree )
    .set('snombree',  forms.value.snombree)
    .set('tnombree',  forms.value.tnombree)
    .set('papellidoe',  forms.value.papellidoe)
    .set('sapellidoe', forms.value.sapellidoe )
    .set('tapellidoe', forms.value.tapellidoe )
    .set('edade', forms.value.edade )
    .set('dpi', forms.value.dpi )
    .set('profesion', forms.value.profesion )
    .set('direccion', forms.value.direccion )
    .set('telefono', forms.value.telefono );
console.log(parametros);

    this.http.post(this.load_api+'estudiante',parametros,httpOptions).subscribe(
    data=>{
      alert("Alumno Agregado Correctamente");
      this.bool_load_data = false;
      this.function_load_data();
    },
    err =>{
      console.log(err);
    }
 
    );


  }



   function_seleccion_grado(id:number){
    if(id > 0 && id < 4){
      this.id_grado_asig = id;
      alert(id);
    }
   }

   function_seleccion_seccion(id:number){
    if(id > 0 && id < 4){
      this.id_seccion_asig = id;
    }
   }











  ngOnInit() {
  }

}
