import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  /**
   * variables a utilizar para cargar la informacion en json 
   */
  load_data: any = {};
  load_data_update: any ={};

  //validar si ya esta cargado con anteriorirad
  bool_load_data: boolean = false;
  bool_update: boolean = false;

  /**
   * para actualizar un componente
   */
  id:number = 0;


  /**
   * variables para los select de estado y cargo
   */
  select_estado:number= 0;
  select_cargo:number = 0;


  /**
   * para los botones visibles 
   */
  bool_ver_personal: boolean = false;
  bool_add_personal: boolean = false;
  profesores: boolean = false;

  constructor(private http: HttpClient) {
    this.function_view_button(1);
   }

  function_view_button(seleccion: number){
    switch(seleccion){
      case 1:
      this.bool_ver_personal = true;
      this.bool_add_personal = false;
      this.profesores = false;
      if(this.bool_load_data == false){
        this.function_load_data();
      }
      

      break;

      case 2: 
      this.bool_ver_personal = false;
      this.bool_add_personal = false;
      this.profesores = true;
      break;

      case 3:
      this.bool_ver_personal = false;
      this.bool_add_personal = true;
      this.profesores = false;
      break;

      default:
      break;


    }
  }





  /**
   * funcion para cargar los datos 
   */

  function_load_data(){
    this.http.get('http://localhost:90/api/prof_to_grade').subscribe(
      data=>{
        this.load_data = data;
        this.bool_load_data =true;
      },
      err =>{

      }
    );
  }

  /**
   * funcion para cargar los datos 
   */

  function_load_data_to_update(id:number){
    this.http.get('http://localhost:90/api/prof_to_grade/'+id).subscribe(
      data=>{
        if(data != null){

          this.load_data_update = data;
          console.log(this.load_data_update[0].com_primer_nombre);
          this.bool_load_data =false;
        }

      },
      err =>{

      }
    );
  }

  /**
   * funcion para ingresar nuevo ciclo
   */
  function_save(forms: NgForm){



   const parametros = new HttpParams()
   .set('pnombre', forms.value.pnombre)
   .set('snombre', forms.value.snombre)
   .set('tnombre', forms.value.tnombre)
   .set('papellido', forms.value.papellido)
   .set('sapellido', forms.value.sapellido)
   .set('tapellido', forms.value.tapellido)
   .set('edad', forms.value.edad)
   .set('tcelular', forms.value.tcelular)
   .set('tdomiciliar', forms.value.tdomiciliar)
   .set('estado', ''+this.select_estado)
   .set('idcargo', ''+this.select_cargo);

   this.http.post('http://localhost:90/api/prof_to_grade',parametros,httpOptions).subscribe(
   data=>{
     alert("personal agregado Correctamente");
     this.bool_load_data = false;
     this.function_view_button(1);
   },
   err =>{
     console.log(err);
   }

   );
  }

  /**para los select */
  function_select_estado(estado:number){
    this.select_estado = estado;
  }

  function_select_cargo(cargo:number){
    this.select_cargo = cargo;
  }
  /**
   * funcion para actualizar un ciclo
   */
  function_update(forms: NgForm){

   const parametros = new HttpParams()
   .set('nombre', forms.value.nombre);

   this.http.put('http://localhost:90/api/ciclo/'+this.id,parametros,httpOptions).subscribe(
   data=>{
     alert("Ciclo Escolar actualizado Correctamente");
     this.function_view_button(1);
         },
   err =>{
     console.log(err);
   }

   );
  }


  function_obtener_id(id:number){
    this.id = id;
    this.function_load_data_to_update(id);
    this.bool_update = true;
    alert('el id es '+id);
  }

  function_desactivar_usuario(id:number){
    alert('funcion desactivar '+ id);
  }













  ngOnInit() {
  }

}
