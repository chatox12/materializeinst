import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}


@Component({
  selector: 'app-ciclo-escolar',
  templateUrl: './ciclo-escolar.component.html',
  styleUrls: ['./ciclo-escolar.component.css']
})
export class CicloEscolarComponent implements OnInit {
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';

  /**
   * comoplete data of insert
   */
  bool_insert:boolean = false;

  /**
   * variables a utilizar
   */
  load_data: any = {};
  error_load:boolean = false;

  /**
   * para actualizar un componente
   */
  nombre: string = '';
  id:number = 0;
  /**
   * para visualizar los componentes
   */
  Ver_todo:boolean = false;
  new_ciclo:boolean = false;

  constructor(private http: HttpClient ) {
    this.function_view_components(1);

   }

   /**
    * para ver componenes de inicio
    * y para cargar los datos
    */
  function_view_components(seleccion:number){

    switch(seleccion){
      case 1:
      this.Ver_todo = true;
      this.new_ciclo = false;
      setTimeout(function(){
        $(function(){
            $('#example').DataTable();
          });
      },1000);

      this.function_load_data();
      break;

      case 2:
      this.Ver_todo = false;
      this.new_ciclo = true;
      break;

      default:
      this.Ver_todo = true;
      this.new_ciclo = false;
      setTimeout(function(){
        $(function(){
            $('#example').DataTable();
          });
      },1000);

      this.function_load_data();
      break;
    }

  }


  /**
   * funcion para cargar los datos
   */

   function_load_data(){
     this.http.get(this.load_api+'ciclo').subscribe(
       data=>{
         this.load_data = data;
       },
       err =>{
         this.error_load = true;
       }
     );
   }



   /**
    * funcion para ingresar nuevo ciclo
    */
   function_save(forms: NgForm){

    if(forms.value.nombre == null){
      const parametros = new HttpParams()
      .set('nombre', forms.value.nombre);

      this.http.post(this.load_api+'ciclo',parametros,httpOptions).subscribe(
      data=>{
        alert("Ciclo Escolar Creado Correctamente");
        this.function_view_components(1);
      },
      err =>{
        console.log(err);
      }

      );
    }
    else{
      this.bool_insert = true;
    }

   }

   /**
    * funcion para actualizar un ciclo
    */
   function_update(forms: NgForm){
    const parametros = new HttpParams()
    .set('nombre', forms.value.nombre);

    this.http.put(this.load_api+'ciclo'+this.id,parametros,httpOptions).subscribe(
    data=>{
      alert("Ciclo Escolar actualizado Correctamente");
      this.function_view_components(1);
          },
    err =>{
      console.log(err);
    }

    );
   }


   function_datos(id_ciclo:number,nombre:string){
    this.id = id_ciclo;
    this.nombre = nombre;
   }















  ngOnInit() {
  }

}
