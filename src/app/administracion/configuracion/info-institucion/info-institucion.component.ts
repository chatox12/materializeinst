import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {  ActivatedRoute } from '@angular/router';


declare var jsPDF: any; // Important


declare var $;
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-info-institucion',
  templateUrl: './info-institucion.component.html',
  styleUrls: ['./info-institucion.component.css']
})
export class InfoInstitucionComponent implements OnInit {
  id_estudiante:number = 0;
  load_data_cursos: any = {};
  load_id_grado:any = {};
  id_curso:number = 0;
  id_unidad:number = 0;
load_api='http://localhost:90/api/';
load_data:any = [];
nombre:string;
  mostrar_info:string = null;
  constructor(private http: HttpClient, private _route: ActivatedRoute) {
   this.id_estudiante=  parseInt(this._route.snapshot.paramMap.get('id'));
   this.select_id_grado();
    this.function_load_data();
   }



   function_load_data(){
    this.http.get(this.load_api+'notas/'+this.id_estudiante).subscribe(
      data=>{
        this.load_data = data;
        console.log(data);
          },
      err =>{

      }
    );
  }

  select_id_grado(){
    this.http.get(this.load_api+'grado/'+this.id_estudiante).subscribe(
      data=>{
       this.load_id_grado = data;
       this.select_cursos();
      },
      err => {

      }
    );
  }

  select_cursos(){
      this.http.get(this.load_api+'cursos/grado/'+this.load_id_grado).subscribe(
        data=>{
         this.load_data_cursos = data;
         console.log(this.load_data_cursos);
        },
        err => {

        }
      );
    }

  function_select_curso(id:number){
    if(id > 0){
      this.id_curso = id;
    }
  }

  function_select_unidad(id:number){
    if(id > 0){
      this.id_unidad = id;
    }
  }

  functio_update(nota:number){
    //forms.value.pnombre != null
    const parametros = new HttpParams()
    .set('nota', ''+nota)
    .set('idCurso',''+this.id_curso)//se jala desde el frontend
    .set('idAlumno',''+this.id_estudiante)
    .set('unidad',''+this.id_unidad);

    this.http.put(this.load_api+'grado',parametros,httpOptions).subscribe(
    data=>{
    alert('curso actualizado correctamente');
    location.reload();
    },
    err =>{
      alert('la nota del curso no ha sido ingresada');
    }

    );


    }

    function_pdf(){
      this.generate_pdf_to_course();
    }

    _nombrePDF: string = '';
    _gradoPDF: number = 0;
    _seccionPDF:number = 0;
    _cursosPDF: any = [];
    generate_pdf_to_course(){

      var doc = new jsPDF('p','mm', 'letter');
      doc.setFontSize(12)
      doc.text(5,20,'logo');
      doc.text(15, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

      doc.setFontSize(12)
      doc.text(35, 25, 'Listado de notas')



    /* The following array of object as response from the API req */

    var itemNew = this.load_data.notas;

    itemNew.forEach(element => {
      this._nombrePDF = element.nombre;
      this._gradoPDF = element.grado;
      this._seccionPDF = element.seccion;
      this._cursosPDF = element.materia;
    });
    doc.setFontSize(12)
    doc.text(35, 30, 'Nombre del Alumno:' );
    doc.text(80, 30, this._nombrePDF );
    doc.text(35, 35, 'Grado:' );
    doc.text(80, 35, this._gradoPDF );
    doc.text(35, 40, 'Seccion:' );
    doc.text(80, 40, this._seccionPDF );

    var col = [ "Nombre del Curso", "unidad 1", "unidad 2", "unidad 3", "unidad 4", "promedio"];
    var rows = [];


    this._cursosPDF.forEach(element => {
      var temp = [element.curso,element.nota1,element.nota2,element.nota3,element.nota4, element.promedio];
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
  


  ngOnInit() {
  }

}
