import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';

  nombre_profesor:string = '';
  id_profresor:number = 0;
  _dataProfesor: any = {};

  constructor(private http: HttpClient) {
    this.function_load_session();


    $('.nav-link').on('click',function() {
      $('.navbar-collapse').collapse('hide');
    });
  }





  function_load_session(){
    let ver = JSON.parse(sessionStorage.getItem('datos'));
    this.id_profresor = ver.id_personal;
    this.function_load_name();
  }

  function_load_name(){
    this.http.get(this.load_api+'prof_to_grade/'+this.id_profresor).subscribe(
      data=>{
        this._dataProfesor = data;
        this.function_name();
      },
      err =>{

      }
    );
  }

  function_name(){
    let name = [];
    name = this._dataProfesor.profesor;
    this.nombre_profesor = name[0].com_primer_nombre + ' '+ name[0].com_primer_apellido;

  }





  ngOnInit() {

  }
  function_salir(){
    sessionStorage.removeItem('datos');
  }

  load_profile_user(){
/*
    this.http.get('http://localhost/api/cliente/'+localStorage.getItem('id')+'/0').subscribe(data => {
      this.dataArray = data;
    });
*/

  }
}
