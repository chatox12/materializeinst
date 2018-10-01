import { Component, OnInit } from '@angular/core';

declare var $;

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


  constructor() {

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
















  ngOnInit() {
  }

}
