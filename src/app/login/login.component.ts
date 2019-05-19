import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

/**
 * load api
 */
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';
bool_login: boolean = false;
bool_vacio: boolean = false;
data_sto:any = [];
  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  function_login(forms: NgForm){
    if(forms.value.usuario != '' && forms.value.password != ''){
      //forms.value.pnombre != null
      const parametros = new HttpParams()
      .set('user', forms.value.usuario)
      .set('password', forms.value.password);

      this.http.post(this.load_api+'login',parametros,httpOptions).subscribe(
      data=>{
        if(data != false){
          this.data_sto = data;
          let personal;
          let alumno;
          let tp_usuario;
          let var_data = this.data_sto.datos;
          var_data.forEach(element => {
            personal = element.id_personal;
            alumno = element.id_alumno;
            tp_usuario = element.id_tp_usuario;

          });

        let data_storage = { id_personal: personal, id_alumno: alumno, id_tp_usuario: tp_usuario };


      //let ver = JSON.parse(sessionStorage.getItem('datos'));
      if(tp_usuario == 1){
        sessionStorage.setItem('datos', JSON.stringify(data_storage));
       this.router.navigate(['/admin']);
      }
      else if(tp_usuario == 2){
      sessionStorage.setItem('datos', JSON.stringify(data_storage));
      this.router.navigate(['/catedratico']);
      }
      else if(tp_usuario == 3){
      sessionStorage.setItem('datos', JSON.stringify(data_storage));
        this.router.navigate(['/alumno']);
      }

        }else{
          this.bool_login = true;
        }
      },
      err =>{
        console.log(err);
      }

      );

    }
    else{
      this.bool_vacio = true;
    }
  }

  function_user(){

  }

}
