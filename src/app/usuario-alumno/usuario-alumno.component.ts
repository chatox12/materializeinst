import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-usuario-alumno',
  templateUrl: './usuario-alumno.component.html',
  styleUrls: ['./usuario-alumno.component.css']
})
export class UsuarioAlumnoComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $('.nav-trigger').dropdown();
    });
  
   }

  ngOnInit() {
  }

}
