import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var jsPDF: any; // Important

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

const httpOptions1 = {
  headers: new HttpHeaders({'Content-TypeAccess-Control-Allow-Origin':'*'})
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
 //cargar la api
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';
 varasig:number = 0;
 varcursoasig:number = 0;

  /**
   * boolean para insert
   */
  bool_insert:boolean = false;
  bool_update_select:boolean =false;
  /**
   * variables a utilizar para cargar la informacion en json
   */
  load_data: any = {};
  load_data_update: any ={};
  load_catedratico: any = {};
  load_cursos:any = {};
  load_cursos_cat:any = {};
  load_cursos_cat1:any = {};
  no_data:boolean = false;
  //validar si ya esta cargado con anteriorirad
  bool_load_data: boolean = false;
  bool_update: boolean = false;

  /**
   * para actualizar un componente
   */
  id:number = 0;


  id_desasignar: number = 0;
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
      this.function_load_catedratico()
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
    this.http.get(this.load_api+'prof_to_grade').subscribe(
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
    this.http.get(this.load_api+'prof_to_grade/'+id).subscribe(
      data=>{
        if(data != null){
          this.load_data_update = data;
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

    if(forms.value.pnombre != null && forms.value.snombre != null && forms.value.papellido != null
      && forms.value.sapellido != null && forms.value.edad != null && forms.value.tcelular != null
      && forms.value.tdomiciliar != null && this.select_estado > 0 && this.select_cargo >0 ){

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

        this.http.post(this.load_api+'prof_to_grade',parametros,httpOptions).subscribe(
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
    else{
      this.bool_insert = true;
    }



  }


  /**
   * para actualizar los datos
   */
  function_update(pnombre: HTMLInputElement, snombre: HTMLInputElement, tnombre:HTMLInputElement,
    papellido: HTMLInputElement, sapellido: HTMLInputElement, tapellido:HTMLInputElement,
    edad:HTMLInputElement, tcelular:HTMLInputElement, tdomiciliar:HTMLInputElement){

    if(pnombre.value != null && snombre.value != null && papellido.value != null &&
       sapellido.value != null && edad.value != null && tcelular.value != null
      && tdomiciliar.value != null && this.select_estado > 0 && this.select_cargo >0 ){

        const parametros = new HttpParams()
        .set('pnombre', pnombre.value)
        .set('snombre', snombre.value)
        .set('tnombre', tnombre.value)
        .set('papellido', papellido.value)
        .set('sapellido', sapellido.value)
        .set('tapellido', tapellido.value)
        .set('edad', edad.value)
        .set('tcelular', tcelular.value)
        .set('tdomiciliar', tdomiciliar.value)
        .set('estado', ''+this.select_estado)
        .set('idcargo', ''+this.select_cargo);
        alert(this.id);
        this.http.put(this.load_api+'profesor/'+this.id,parametros,httpOptions).subscribe(
        data=>{
          alert("Personal Actualizado Correctamente");
          this.bool_load_data = false;
          this.bool_update = false;

          this.function_view_button(1);
        },
        err =>{
          console.log(err);

        }

        );

    }
    else{
      this.bool_update_select = true;
    }


  }
  /**para los select */
  function_select_estado(estado:number){
    this.select_estado = estado;
  }

  function_select_cargo(cargo:number){
    this.select_cargo = cargo;
  }



  function_obtener_id(id:number){
    this.id = id;
    this.function_load_data_to_update(id);
    this.bool_update = true;
  }

  function_desactivar_usuario(id:number){
    alert('funcion desactivar '+ id);
  }


  cancel_update(){
    this.bool_update = false;
  }

function_load_catedratico(){
  this.http.get(this.load_api+'prof_to_curso').subscribe(
    data=>{
      this.load_catedratico = data;
    },
    err =>{

    }
  );
}

function_load_cursos(id:number){
  this.varasig = id;
  this.http.get(this.load_api+'cursos').subscribe(
    data=>{
      this.load_cursos_cat = data;
console.log(data)
    },
    err =>{

    }
  );
}

function_sele_asig(id:number){
  if(id > 0){
    this.varcursoasig = id;
  }
}

function_cursos_catedratico(id:number){
  this.http.get(this.load_api+'prof_to_curso/'+id).subscribe(
    data=>{
      this.id_desasignar = id;
      this.load_cursos_cat1 = data;

console.log(this.load_cursos_cat1.curso)
    },
    err =>{

    }
  );

}

function_asig_course(){

  if(this.varasig > 0 && this.varcursoasig > 0){
    const parametros = new HttpParams()
    .set('id_personal', ''+this.varasig)
    .set('id_curso', ''+this.varcursoasig );

    this.http.post(this.load_api+'prof_to_curso',parametros,httpOptions).subscribe(
    data=>{
      alert("Curso Asignado Correctamente");

    },
    err =>{
      console.log(err);
    }

    );
  }
  else{
    console.log(this.varasig, this.varcursoasig);
  }

}



  @ViewChild('contenidos') content: ElementRef;


convert() {
  var doc = new jsPDF('landscape','mm', 'letter');
  doc.setFontSize(40)
  doc.setFont('times')
  doc.setFontType('italic')
  doc.text(90, 15, 'I.B.S.A.S')
  doc.setFontSize(12)
  doc.text(75, 20, 'Lic. "Angel Guillermo Arreaga Barrios"')
  doc.setFontSize(12)
  doc.text(75, 25, 'San Antonio Sacatépequez, San Marcos')
  doc.setFontSize(12)
  doc.text(90, 30, 'Tel. 5769 1917')
  doc.setFontSize(12)




  doc.text(35, 40, 'Listado de Personal')


  var col = ["Nombre", "Telefono Celular", "Telefono de casa", "Cargo"];
  var rows = [];

/* The following array of object as response from the API req */

var itemNew = this.load_data.profesor;


itemNew.forEach(element => {
  var temp = [element.pnombre+ ' ' +element.snombre+ ' '+element.tnombre+ ' '+element.papellido+ ' '+element.sapellido+ ' '+element.tapellido+ ' ',element.celular, element.domiciliar, element.cargo];
  rows.push(temp);

});

  doc.autoTable(col, rows, {
    startY: 45
  });
  //doc.save('personal.pdf');
   /**para mostar los en el propio navegador */
   function open_data_uri_window(url) {
    var html = '<html>' +
      '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
      '<body>' +
      '<iframe src="' + url + '"></iframe>' +
      '</body></html>';
   var a = window.open()
    a.document.write(html)
  }
var a = doc.output('datauri');
open_data_uri_window(a);
/** fin para mostar los en el propio navegador */
}




function_Salir(){
  alert('salir');
}


function_desasignar_curso(id:number){

  if(confirm("Desea desasignar el curso")){
    this.http.delete(this.load_api+'prof_to_curso/'+id, httpOptions1).subscribe(
    
      data=>{
        alert("Desasignacion correcta");
        location.reload();
  
      },
      err =>{
        console.log(err);
      }
  
      );
  }
  else{
    console.log('no ingreso');
  }

  
  
  }

  ngOnInit() {
  }

}
