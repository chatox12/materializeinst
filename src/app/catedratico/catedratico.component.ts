import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
declare var jsPDF: any; // Important


declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-catedratico',
  templateUrl: './catedratico.component.html',
  styleUrls: ['./catedratico.component.css']
})
export class CatedraticoComponent implements OnInit {

  /**load api */
  load_api: string = 'http://localhost:90/api/';
  load_data: any = {};
  load_data_cursos:any = {};
  //variables para la insercion
  Var_grado: number;
  var_seccion: number;
  var_unidad: number;
  var_curso: number;

  /**sidabled element */
  bool_d_grado:boolean = false;
  bool_d_seccion:boolean = false;
  bool_d_unidad:boolean = false;
  bool_d_curso:boolean = false;
  bool_load_table:boolean = false;
  //para desabilitar los select de unidad
  bool_select:boolean = false;
  //Seleccion de grado
  Seleccion_grado: boolean = false;

  //seleccion para la seccion
  Seleccion_seccion: boolean = false;
  //ingreso de notas
  seleccion: boolean = false;

  contador_ingreso:number = 0;
  /**para guardar los id */
  data = [];
  var_id_nota_update:number = 0;


  /*cargar datos necesarios para los usuarios*/
  nombre_profesor:string = '';
  id_profresor:number = 0;
  _dataProfesor: any = {};
  constructor( private http: HttpClient) {
    this.Function_seleccion_seccion(0);
    this.function_load_session();
   }

   function_load_session(){
     let ver = JSON.parse(sessionStorage.getItem('datos'));
     this.id_profresor = ver.id_personal;
     this.function_load_name();
     this.function_cursos_catedratico(this.id_profresor);
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
     this.nombre_profesor = name[0].com_primer_nombre + ' ' +name[0].com_segundo_nombre + ' ' +name[0].com_tercer_nombre + ' ' +name[0].com_primer_apellido + ' ' +name[0].com_segundo_apellido + ' ' +name[0].com_tercer_apellido;

   }

/*funcion para seleccionar los cursos de un profesor*/
function_cursos_catedratico(id:number){
  this.http.get(this.load_api+'prof_to_curso/'+id).subscribe(
    data=>{
      this.load_data_cursos = data;
    },
    err =>{

    }
  );

}
   /**funcion para seleccionar las vistas */
   bool_ingreso:boolean = false;
   bool_reportes: boolean = false;

   function_select_view(Seleccionar: number){

    switch(Seleccionar){
      case 1:
      this.bool_ingreso = true;
      this.bool_reportes = false;
      break;

      case 2:
      this.bool_ingreso = false;
      this.bool_reportes = true;
      this.function_load_data_PDF();
      break;

      default:
      this.bool_ingreso = true;
      this.bool_reportes = false;
    }
   }




   //para la seleccion de grado
   Fuction_seleccion_grado(Estado:number){
     if(Estado > 0){
      this.Seleccion_grado = true;
      this.Var_grado = Estado;
      this.bool_d_grado = true;
     }
     else{
      this.Seleccion_grado = false;

     }

   }

   //para la seleccion de la seccion
   Function_seleccion_seccion(Estado:number){
    if(Estado > 0){
      this.var_seccion = Estado;
      this.Seleccion_seccion = true;
      this.bool_d_seccion = true;
    }
    else{
      this.Seleccion_seccion = false;
    }

   }




   function_load_data(){
    this.http.get(this.load_api+'estudiante/2/'+this.Var_grado+'/'+this.var_seccion).subscribe(
      data=>{
        this.load_data = data;
      },
      err =>{

      }
    );
  }
   //para mostrar las notas
  Mostrar_inicio(Estado: boolean){
    if(this.var_curso > 0 && this.var_unidad > 0){
      this.seleccion = Estado;
      this.bool_load_table = true;
      this.function_load_data();
    }
    else{
      alert('debe de seleccionar un curso y una unidad academica');
    }

  }

  function_select_unidad(id:number){
    if(id > 0 ){
      this.bool_d_unidad = true;
      this.var_unidad = id;
      this.bool_d_unidad = true;
    }

  }

  function_select_curso(id:number){
    if(id > 0){
      this.data = [];
      this.var_curso = id;
      this.bool_d_curso = true;
    }
  }


function_cambiar(){
  location.reload();
}

function_separate(nota:number, id:number){

  if(nota != 0){

    if(nota >= 0 && nota <= 100){

      if(this.contador_ingreso <= 0){
        this.contador_ingreso = this.contador_ingreso +1;
        this.function_save(nota, id);
      }
      else{
        var pos = -1;
        for(let i = 0; i < this.data.length; i ++){
          if(this.data[i].id_alumno == id){
            pos = 1;
            this.var_id_nota_update = this.data[i].id_nota;
          }
          }

        if(pos == -1){
          this.function_save(nota, id);

        }
        else if(pos == 1){
          if(confirm("Desea Actualizar esta nota")){
            this.functio_update(id, nota, this.var_id_nota_update);
          }
        }

      }
    }
    else{
      $(function(){
        $.notify(
          "Ingrese una calificacion valida"
          );
   });
    }
  }
  else{
    $(function(){
      $.notify(
        "Se debe de ingresar una calificacion"
        );
 });


  }

}


function_save(nota:number, id:number){

//forms.value.pnombre != null
const parametros = new HttpParams()
.set('nota', ''+nota)
.set('idCurso',''+this.var_curso)
.set('idAlumno',''+id)
.set('unidad',''+this.var_unidad);

this.http.post(this.load_api+'notas',parametros,httpOptions).subscribe(
data=>{
var nota_save = data;
var file = {id_alumno: id, id_nota: nota_save};
this.data.push(file);
$(function(){
  $.notify(
    "nota ingresada correctamente"
    );
});

},
err =>{
}

);

}


functio_update(id_alumno:number, nota:number, id_update:number){
//forms.value.pnombre != null
const parametros = new HttpParams()
.set('nota', ''+nota)
.set('idCurso',''+this.var_curso)//se jala desde el frontend
.set('idAlumno',''+id_alumno)
.set('unidad',''+this.var_unidad);

this.http.put(this.load_api+'nota/'+id_update,parametros,httpOptions).subscribe(
data=>{
alert('curso actualizado correctamente');
},
err =>{
}

);


}

/*load data from PDF and EXCEL*/
_loadDataPDF: any = {};
function_load_data_PDF(){
  //id_curso, $id_grado, $id_seccion
  this.http.get(this.load_api+'notas/'+this.var_curso+'/'+this.Var_grado+'/'+this.var_seccion).subscribe(
    data=>{
      this._loadDataPDF = data;
    },
    err =>{

    }
  );
}


/*Generar PDF's*/
function_generate_pdf(){
this.function_generate_pdf_print();
}

function_generate_pdf_print(){
  var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(15, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Listado de notas')



/* The following array of object as response from the API req */


var col = [ "Nombre del Alumno", "Grado", "Seccion","Unidad 1","Unidad 2", "Unidad 3", "Unidad 4"];
var rows = [];

var itemNew = this._loadDataPDF.alumnos;


itemNew.forEach(element => {
  var temp = [element.alumno,element.grado,element.seccion, element.Unidad_1,element.Unidad_2,element.Unidad_3,element.unidad_4];
  rows.push(temp);

});

  doc.autoTable(col, rows, {
    startY: 50
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


function_Salir(){
  sessionStorage.removeItem('datos');
}

  ngOnInit() {
  }

}
