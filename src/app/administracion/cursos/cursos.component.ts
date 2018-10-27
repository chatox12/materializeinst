import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
declare var jsPDF: any; // Important


declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  /**
   * insert and update
   */
  bool_insert:boolean = false;
  bool_asig:boolean = false;

  /**
   * variables a utilizar para las selecciones
   */
  load_data: any = {};
  load_data_cursos: any = {};
  correct_load: boolean = false;
  correct_load1: boolean =false;
  error_load:boolean = false;

  /**
   * variables a utilizar para post and update
   */
  id:number = 0;
  nombre: string = '';

  /**
   * para mostar en grados
   */
  id_grado_mostar: number = 0;

  /**
   * para asignacion de curso a grado
   */
  id_asi_curso: number = 0;
  id_asi_grado: number = 0;

  /**
   * var para visualizar
   */
  listar:boolean = false;
  agregar:boolean = false;
  porgrado:boolean = false;
  nuevo:boolean = false;
  Seleccionar_grado:boolean= false;


  /**
   * asignar cursos a grado
   */
  id_cursos_Asig:number = 0;
  id_grado_Asig:number = 0;
  bool_asig_no_correct:boolean = false;

/**para api */
load_api:string = 'http://localhost:90/api/';

  constructor(private http: HttpClient ) {
    this.function_view_component(1);
  }




  function_view_component(seleccion:number){
    switch(seleccion){
      case 1:
      this.listar= true;
      this.agregar = false;
      this.porgrado = false;
      this.nuevo = false;
      setTimeout(function(){
        $(function(){
            $('#Cursos').DataTable();
          });
      },1000);
      if(this.correct_load == false){
        this.function_load_data();
      }


      break;

      case 2:
      this.listar= false;
      this.agregar = true;
      this.porgrado = false;
      this.nuevo = false;
      break;

      case 3:
      this.listar= false;
      this.agregar = false;
      this.porgrado = true;
      this.nuevo = false;
      break;

      case 4:
      this.listar= false;
      this.agregar = false;
      this.porgrado = false;
      this.nuevo = true;

      if(this.correct_load1 == false){
        this.function_load_data();
      }


      break;

      default:
      this.listar= true;
      this.agregar = false;
      this.porgrado = false;
      this.nuevo = false;
      break;
    }
  }

  /**
   * funcion para cargar los datos
  */

  function_load_data(){
    this.http.get(this.load_api+'cursos').subscribe(
      data=>{
        this.load_data = data;
        this.correct_load = true;
      },
      err =>{
        this.error_load = true;
      }
    );
  }
/**funcion para cargar informacion de curso por grado */
function_seleccion_curso_view(id:number){

    if(id == 1 || id == 2 || id == 3){
      this.load_data_cursos = {};

      console.log('selecciono '+id);
      this.http.get(this.load_api+'cursos/grado/'+id).subscribe(
        data=>{
          this.load_data_cursos = data;
          this.correct_load1 = true;
          this.Seleccionar_grado = true;
          },
        err =>{
          this.error_load = true;
        }
      );
    }
    else{
      this.Seleccionar_grado = false;
    }

  }


  /**
   * funcion para ingresar nuevo curso
   */
  function_save(forms: NgForm){

    if(forms.value.nombre != ''){
      //forms.value.pnombre != null
      const parametros = new HttpParams()
      .set('nombre', forms.value.nombre);

      this.http.post(this.load_api+'cursos',parametros,httpOptions).subscribe(
      data=>{
        alert("Curso creado Correctamente");
        this.correct_load = false;
        this.function_view_component(1);

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

   this.http.put(this.load_api+'cursos/'+this.id,parametros,httpOptions).subscribe(
   data=>{
     alert("Curso actualizado Correctamente");
     this.correct_load =false;
     this.function_view_component(1);
         },
   err =>{
     console.log(err);
   }

   );
  }

  function_delete($id){


  }

  function_datos(id_ciclo:number,nombre:string){
   this.id = id_ciclo;
   this.nombre = nombre;
  }

  function_obtener_id_cursos_asi(id:number){
    if(id > 0){
      this.id_cursos_Asig = id;
    }
  }

  function_obtener_id_grado_asi(id:number){
    if(id > 0){
      this.id_grado_Asig = id;
    }
  }

  /**
   * funcion save para agregar cursos a grado
   */
  funcion_save_cursos_to_grado(){
      if(this.id_cursos_Asig > 0 && this.id_grado_Asig > 0){
        const parametros = new HttpParams()
        .set('idGrado', ''+this.id_grado_Asig)
        .set('idCurso', ''+this.id_cursos_Asig);

        this.http.post(this.load_api+'cursos_to_grade',parametros,httpOptions).subscribe(
        data=>{
          alert("Curso creado Correctamente");
          this.correct_load = false;
          this.function_view_component(1);

        },
        err =>{
          console.log(err);
        }

        )

      }
      else{
        this.bool_asig_no_correct = true;
      }
  }


generate_pdf_to_course(){

  var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(15, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Listado de Cursos')


  var col = ["Orden", "Nombre del Curso"];
  var rows = [];

/* The following array of object as response from the API req */

var itemNew = this.load_data.cursos;


itemNew.forEach(element => {
  var temp = [element.id_curso,element.com_nombre];
  rows.push(temp);

});

  doc.autoTable(col, rows, {
    startY: 30
  });
  //para que se guarde automaticamente
  //doc.save('Cursos1.pdf');

/**para mostar los en el propio navegador */
  function open_data_uri_window(url) {
    var html = '<html>' +
      '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
      '<body>' +
      '<iframe src="' + url + ' "></iframe>' +
      '</body></html>';
   var a = window.open()
    a.document.write(html)
  }
var a = doc.output('datauri');
open_data_uri_window(a);
/** fin para mostar los en el propio navegador */


}




generate_pdf_to_grade(){
  var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(20, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Listado de Cursos')


  var col = ["Nombre Curso", "grado"];
  var rows = [];

/* The following array of object as response from the API req */

var itemNew = this.load_data_cursos.cursos;


itemNew.forEach(element => {
  var temp = [element.com_nombre, element.com_grado];
  rows.push(temp);

});

  doc.autoTable(col, rows, {
    startY: 30
  });

  //doc.save('Cursos.pdf');
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





  ngOnInit() {
  }

}
