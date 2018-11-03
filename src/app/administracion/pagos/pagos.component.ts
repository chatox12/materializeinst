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
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';
  load_data: any = {};
  correct_load: boolean = false;
  bool_save:boolean = false;
  /**
   * para realizar un cobro
   */
  id_pagos:number = 0;
  nombre_pago:string = '';
  cantidad_pago:number = 0.0;

  constructor(private http:HttpClient) {


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

        if(this.correct_load == false){
          this.function_load_data();
        }


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


  function_cobro_nuevo(id:number, nombre:string, cantidad:number){
    this.id_pagos = id;
    this.nombre_pago = nombre;
    this.cantidad_pago = cantidad;
    console.log(id + nombre + cantidad);
  }


  function_load_data(){
    this.http.get(this.load_api+'pagos').subscribe(
      data=>{
        this.load_data = data;
        this.correct_load = true;
      },
      err =>{
      }
    );
  }



  function_save(forms: NgForm){



    if(forms.value.pago != '' && forms.value.costo != ''){
      const parametros = new HttpParams()
      .set('nombre', forms.value.pago)
      .set('cantidad', forms.value.costo );

  console.log(parametros);

      this.http.post(this.load_api+'pagos',parametros,httpOptions).subscribe(
      data=>{
        alert("cobro Agregado Correctamente");
        this.correct_load = false;
        this.function_mostar(1);

      },
      err =>{
        console.log(err);
      }

      );
    }
    else{
      this.bool_save = true;
    }

  }





  function_update(pago:HTMLInputElement, costo:HTMLInputElement){


    if(pago.value != '' && costo.value != ''){
      const parametros = new HttpParams()
      .set('nombre', pago.value)
      .set('cantidad',costo.value );

  console.log(parametros);

      this.http.put(this.load_api+'pagos/'+this.id_pagos,parametros,httpOptions).subscribe(
      data=>{
        alert("Cobro Modificado Correctamente");
        this.correct_load = false;
        this.function_mostar(1);

      },
      err =>{
        console.log(err);
      }

      );
    }
    else{
      this.bool_save = true;
    }


  }








  ngOnInit() {
  }

}
