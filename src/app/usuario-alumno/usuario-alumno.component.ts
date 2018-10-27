import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}


@Component({
  selector: 'app-usuario-alumno',
  templateUrl: './usuario-alumno.component.html',
  styleUrls: ['./usuario-alumno.component.css']
})
export class UsuarioAlumnoComponent implements OnInit {
  load_api:string = 'http://localhost:90/api/';
load_data:any = {};
nombre_usuario: string = '';
id_alumno: number = 0;
  constructor(private http: HttpClient) {
this.function_load_id();
this.function_load_data();
   }

function_load_id(){
    let ver = JSON.parse(sessionStorage.getItem('datos'));
    console.log(ver);
    this.id_alumno = ver.id_alumno;
}



   function_load_data(){
    this.http.get(this.load_api+'notas/'+this.id_alumno).subscribe(
      data=>{
        this.load_data = data;
        this.function_load_name_usuario();

          },
      err =>{

      }
    );
  }

function_load_name_usuario(){
let alumno = [];
alumno = this.load_data.notas;
console.log(alumno);
this.nombre_usuario = alumno[0].nombre;
console.log(this.nombre_usuario);
}


function_salir(){
  sessionStorage.removeItem('datos');
}

  ngOnInit() {
  }






}
