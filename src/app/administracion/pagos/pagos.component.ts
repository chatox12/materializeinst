import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  /* para mostar los modulos*/
  cobro_disponible:boolean = false;
  nuevo_cobro:boolean = false;
  pago_colegiatura: boolean = false;

  /**
   * load api
   */
  load_api:string = 'http://localhost:90/api/';

  constructor(private http:HttpClient) {

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });

    this.function_mostar(1);

   }

   /**
    * funciones para mostrar u ocultar los elementos 
    */
//cobros disponibles 
    function_mostar(mostar:number){
      if(mostar == 1){
        this.cobro_disponible = true;
        this.nuevo_cobro = false;
        this.pago_colegiatura  = false;
      }
      else
      if(mostar == 2){
        this.cobro_disponible = false;
        this.nuevo_cobro = true;
        this.pago_colegiatura  = false;
      }
      else 
      if(mostar == 3){
        this.cobro_disponible = false;
        this.nuevo_cobro = false;
        this.pago_colegiatura  = true;
      }

    }


  function_cobro_nuevo(){
    console.log('nuevo cobro');
  }

  


  function_save(forms: NgForm){

    const parametros = new HttpParams()
    .set('nombre', forms.value.pago)
    .set('cantidad', forms.value.costo );

console.log(parametros);

    this.http.post(this.load_api+'pagos',parametros,httpOptions).subscribe(
    data=>{
      alert("Alumno Agregado Correctamente");
    },
    err =>{
      console.log(err);
    }
 
    );


  }














  ngOnInit() {
  }

}
