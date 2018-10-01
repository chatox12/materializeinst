//componentes para angular 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes del routing 
import { UsuarioAlumnoRoutingModule } from './usuario-alumno-routing.module';
import { UsuarioAlumnoComponent } from './usuario-alumno.component';

@NgModule(
    {
        imports: [
            CommonModule,
            UsuarioAlumnoRoutingModule
        ],
        declarations:[
            UsuarioAlumnoComponent
        ]
    }
)

export class UsuarioAlumnoModule {}
