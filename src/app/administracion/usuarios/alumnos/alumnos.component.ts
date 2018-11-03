import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var jsPDF: any; // Important

declare var $;
import * as XLSX from 'xlsx';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  /**
   * para uso del api*/
load_api:string = 'http://tmyggwro.lucusvirtual.es/api/';
  /**
   * variables para comprobar que se mostrara
  */
  mostrar_inscripcion: boolean = false;
  mostrar_listado_alumno: boolean = false;

  bool_save:boolean = false;
  /**
   * para seleccionar grado y seccion
   */
  id_grado_asig:number = 0;
  id_seccion_asig:number = 0;
  id_ciclo_escolar:number = 0;
  id_select_genero:number = 0;
  id_select_parentesco: number = 0;
  name_ciclo: string = '';
  id_alumno_cobro:number = 0;
  id_pago:number = 0;
  load_data_cobros: any = {};
  load_imp:boolean = false;
  id_para_imprimir:any;
  id_mes: number = 0;
  load_pagos:any = {};
  load_pagos_alumno: any = {};
  cargar_curso:number = 0;
  bool_cargar_datos:boolean = false;
  bool_imprimir_boleta: boolean = false;
  constructor(private http: HttpClient) {

    this.function_mostar_div(2);
    this.function_load_data_ciclo();
    this.function_select_data_cobros();
   }

/**
   * variables a utilizar .para cargar la informacion en json
   */
  load_data: any = {};
  load_data_ciclo: any = {};
  load_data_imprimir:any = {};
  //validar si ya esta cargado con anteriorirad
  bool_load_data: boolean = false;
  bool_update: boolean = false;



  /**laod data seccion */
  id_ciclo: number = 0;
  nombre_ciclo:string ='';

  nombreAlumnoBoleta:string = '';
  nombrePadreBoleta:string = '';

/**
 * function mostar formularios
 */
  function_mostar_div(seleccion: number){
    switch(seleccion){
      case 1:
            this.mostrar_inscripcion = true;
            this.mostrar_listado_alumno = false;
            this.bool_cargar_datos = false;

            break;
      case 2:
          this.mostrar_inscripcion = false;
          this.mostrar_listado_alumno = true;
          this.bool_cargar_datos = false;
            this.function_load_data();
            setTimeout(function(){
              $(function(){
                  $('#alumno').DataTable();
                });
            },1000);

          break;
      case 3:
      this.mostrar_inscripcion = false;
      this.mostrar_listado_alumno = false;
      this.bool_cargar_datos = true;
      this.function_select_data_cobros()

      break;

      default:
          this.mostrar_inscripcion = true;
          this.mostrar_listado_alumno = false;
          this.bool_cargar_datos = false;

          break;
    }
  }



/**
   * funcion para cargar los datos
   */

  function_load_data(){
    this.http.get(this.load_api+'estudiante/1/0/0').subscribe(
      data=>{
        this.load_data = data;
        this.bool_load_data =true;
      },
      err =>{

      }
    );
  }

  select_curso_load_pago(id:number){
    if(id > 0){
      this.function_load_data_pagos(id);
    }
  }

  function_load_data_pagos(id:number){
    this.http.get(this.load_api+'pagos_realizados/'+id).subscribe(
      data=>{
        this.load_data = data;
        this.bool_load_data =true;
      },
      err =>{

      }
    );
  }
  function_load_data_ciclo(){
    this.http.get(this.load_api+'ciclolectivo' ).subscribe(
      data=>{
        this.load_data_ciclo = data;

        if(data.valueOf){
        this.load_data_ciclo = data;
        //this.nombre_ciclo = data.ciclo.nombre;
        //this.id_ciclo_escolar = data.ciclo.ciclo;
        this.function_obtener_datos_ciclo();
        }
      },
      err =>{

      }
    );
  }

function_obtener_datos_ciclo(){
  this.nombre_ciclo = this.load_data_ciclo.nombre;
  this.id_ciclo_escolar = this.load_data_ciclo.ciclo;

}

  function_load_data_imprimir(tipo_cobro:number ){

    this.load_data_imprimir = {};
    this.http.get(this.load_api+'cobro/'+tipo_cobro+'/'+this.id_para_imprimir ).subscribe(
      data=>{
          this.load_data_imprimir = data;
      },
      err =>{

      }
    );
  }

  function_save(forms: NgForm){

if(forms.value.pnombrea != '' && forms.value.snombrea != '' && forms.value.papellidoa != '' &&
   forms.value.sapellidoa != '' && forms.value.edad != '' && forms.value.fnacimiento &&
   forms.value.finscripcion != '' && forms.value.codigomine != '' && this.id_seccion_asig > 0 &&
   this.id_ciclo_escolar != null && forms.value.pnombree != '' && forms.value.snombree != '' &&
   forms.value.papellidoe != '' && forms.value.sapellidoe != '' && forms.value.edade != '' &&
   forms.value.dpi != '' && forms.value.profesion != '' && forms.value.direccion != '' &&
   forms.value.telefono != '' && this.id_select_genero > 0 && this.id_select_parentesco > 0){
  const parametros = new HttpParams()
    .set('pnombrea', forms.value.pnombrea)
    .set('snombrea', forms.value.snombrea )
    .set('tnombrea', forms.value.tnombrea)
    .set('papellidoa', forms.value.papellidoa )
    .set('sapellidoa',  forms.value.sapellidoa)
    .set('edada', forms.value.edada)
    .set('fnacimiento', forms.value.fnacimiento)
    .set('finscripcion', forms.value.finscripcion)
    .set('codigomine', forms.value.codigomine)
    .set('idgrado', ''+this.id_grado_asig)
    .set('idseccion',  ''+this.id_seccion_asig)
    .set('idciclo',  ''+this.id_ciclo_escolar)
    .set('id_genero',''+this.id_select_genero)
    .set('pnombree', forms.value.pnombree )
    .set('snombree',  forms.value.snombree)
    .set('tnombree',  forms.value.tnombree)
    .set('papellidoe',  forms.value.papellidoe)
    .set('sapellidoe', forms.value.sapellidoe )
    .set('tapellidoe', forms.value.tapellidoe )
    .set('edade', forms.value.edade )
    .set('dpi', forms.value.dpi )
    .set('profesion', forms.value.profesion )
    .set('direccion', forms.value.direccion )
    .set('telefono', forms.value.telefono )
    .set('parentesco',''+this.id_select_parentesco)
    .set('usuario', forms.value.codigomine+this.id_ciclo_escolar)
    .set('password',''+forms.value.codigomine+this.id_ciclo_escolar);

    this.http.post(this.load_api+'estudiante',parametros,httpOptions).subscribe(
    data=>{
      alert("Alumno Agregado Correctamente");
      this.bool_load_data = false;
      this.bool_imprimir_boleta = true;
      this.nombreAlumnoBoleta = forms.value.pnombrea + forms.value.snombrea + forms.value.tnombrea + forms.value.papellidoa+forms.value.sapellidoa;
      this.nombrePadreBoleta =  forms.value.pnombree+forms.value.snombree+forms.value.tnombree+ forms.value.papellidoe + forms.value.sapellidoe+forms.value.tapellidoe

    },
    err =>{
    }

    );
}
else{
  this.bool_save = true;
}




  }



   function_seleccion_grado(id:number){
    if(id > 0 && id < 4){
      this.id_grado_asig = id;
    }
   }

   function_seleccion_seccion(id:number){
    if(id > 0 && id < 4){
      this.id_seccion_asig = id;
    }
   }

   function_select_genero(id:number){
    this.id_select_genero = id;
   }

   function_select_parentesco(id:number){
    this.id_select_parentesco = id;
   }



   function_obtener_id(id:number){
    this.id_alumno_cobro = id;
    this.bool_save = false;
    this.load_imp = false;
    this.function_load_data_cobros();
   }

   function_obtener_id_insert(id:number){
    this.id_pago = id;

   }

   function_select_data_cobros(){
    this.http.get(this.load_api+'pagos').subscribe(
      data=>{
        this.load_pagos = data;
      },
      err =>{
      }
    );
  }

   function_load_data_cobros(){
    this.http.get(this.load_api+'pagos').subscribe(
      data=>{
        this.load_data_cobros = data;
      },
      err =>{
      }
    );
  }

  save_cobro(fecha:HTMLDataElement){
    if(this.id_alumno_cobro > 0 && this.id_pago){
      const parametros = new HttpParams()
      .set('idalumno', ''+this.id_alumno_cobro)
      .set('idpagos',''+this.id_pago)
      .set('fecha',fecha.value)
      .set('colegiatura_id','')
      .set('mes','');

      this.http.post(this.load_api+'cobro',parametros,httpOptions).subscribe(
      data=>{
        this.load_imp = true;
        this.id_para_imprimir = data;
        this.function_load_data_imprimir(1);
        alert("cobro realizado Correctamente");

      },
      err =>{
      }

      );
    }
    else{
      this.bool_save = true;
    }
  }




  load_data_imp_comprobante(){
    var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(20, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Comprobante de pago')


/* The following array of object as response from the API req */

var itemNew = this.load_data_imprimir.cobro;
    /* X, Y*/
    doc.text(35, 35, "Nombre del Estudiante: " + itemNew.estudiante);
    doc.text(35, 40, "Nombre del Pago: "+ itemNew.nombre_pago);
    doc.text(35, 45, "Cantidad: "+ itemNew.cantidad_pago);
    doc.text(35, 50, "fecha: "+ itemNew.fecha_pago);



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


  save_colegiatura(fecha:HTMLDataElement){

    if(this.id_alumno_cobro > 0 && this.id_mes > 0){
      const parametros = new HttpParams()
      .set('idalumno', ''+this.id_alumno_cobro)
      .set('idpagos','')
      .set('fecha', fecha.value)
      .set('colegiatura_id',''+1)
      .set('mes',''+this.id_mes);

      this.http.post(this.load_api+'cobro',parametros,httpOptions).subscribe(
      data=>{
        this.id_para_imprimir = data;
        this.load_imp = true;
        this.load_data_imprimir = {};
        this.function_load_data_imprimir(2);

        alert("cobro realizado Correctamente");
      },
      err =>{
      }

      );
    }
    else{
      this.bool_save = true;
    }
  }

function_imprimir_colegiatura(){
  var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(20, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Comprobante de pago de Colegiatura')


/* The following array of object as response from the API req */

var itemNew = this.load_data_imprimir.cobro;
console.log(itemNew);
    /* X, Y*/
    doc.text(35, 35, "Nombre del Estudiante: " + itemNew[0].estudiante);
    doc.text(35, 40, "Nombre del Pago: "+ itemNew[0].nombre);
    doc.text(35, 45, "Mes cancelado: "+ itemNew[0].mes);
    doc.text(35, 50, "Cantidad: "+ itemNew[0].total);
    doc.text(35, 55, "fecha: "+ itemNew[0].fecha_pago);



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


  function_select_mes(id:number){
    this.id_mes = id;
  }



  /**para cargar los datos de los cobros realizados a estudiantes */
  _pagos_realizados:number = 0;
  _viewTablePagos:boolean = false;
  function_select_pago_realizado(id:number){
    if(id > 0){
      this._pagos_realizados = id;
      this._viewTablePagos = true;
      this.bool_load_data = false;
      this._load_data_alumnos_pagos();
      setTimeout(function(){
        $(function(){
            $('#alumno_pagos').DataTable();
          });
      },1000);

    }
    else{
      this._viewTablePagos = false;
    }
  }

  _load_data_alumnos_pagos(){
    this.http.get(this.load_api+'pagos_realizados/'+this._pagos_realizados).subscribe(
      data=>{
        this.load_pagos_alumno = data;

      },
      err =>{
      }
    );
  }

/**imprimir todos los alumnos */
id_pdf:number = 1;
  imprimir_alumnos(){
    var imgData = '../../assets/logo.png'
    var doc = new jsPDF('p','mm', 'letter');
    doc.addImage(imgData, 'PNG', 50, 0, 100, 30)


    doc.setFontSize(12)
    doc.text(35, 40, 'Listado de alumnos')


    var col = ["Orden", "Nombre Completo", "Grado", "Seccion","Codigo Mineduc"];
    var rows = [];

  /* The following array of object as response from the API req */

  var itemNew = this.load_data.estudiante;


  itemNew.forEach(element => {

    var temp = [this.id_pdf,element.estudiante, element.grado, element.seccion, element.mineduc];
    rows.push(temp);
    this.id_pdf = this.id_pdf+1;
  });

    doc.autoTable(col, rows, {
      startY: 45
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

  this.id_pdf = 0;
  }

  function_excel(){
    this.generar_excel_todos_alumnos(this.load_data.estudiante, 'Alumnos');
  }

  generar_excel_todos_alumnos(data: any[], nombre:string){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] } ;
    XLSX.writeFile(workbook, nombre+'.xls', { bookType: 'xls', type: 'buffer' });
  }



function_boleta_print(){
this.imprimir_boleta_inscripcion();
this.function_mostar_div(2);
}


/*imprimir boleta de inscripcion*/
imprimir_boleta_inscripcion(){
  var doc = new jsPDF('p','mm', 'letter');
  doc.setFontSize(12)
  doc.text(5,20,'logo');
  doc.text(15, 15, 'Instituto Basico Por Cooperativa \"Lic. Angel Guillermo Arreaga Barrios\", San Antonio Sac.')

  doc.setFontSize(12)
  doc.text(35, 25, 'Listado de Cursos')
  doc.text(35, 30, this.nombreAlumnoBoleta)
  doc.text(35, 25, this.nombrePadreBoleta)



/* The following array of object as response from the API req */


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

this.id_pdf = 0;
}





  /**imprimir alumnos por pagos */
  ngOnInit() {
  }

}
