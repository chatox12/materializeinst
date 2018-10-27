//componentes para angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes del routing
import { UsuarioAlumnoRoutingModule } from './usuario-alumno-routing.module';
import { UsuarioAlumnoComponent } from './usuario-alumno.component';
import { AlumnoGuard } from '../alumno.guard';
@NgModule(
    {
        imports: [
            CommonModule,
            UsuarioAlumnoRoutingModule
        ],
        declarations:[
            UsuarioAlumnoComponent
        ],
        providers: [AlumnoGuard ]
    }
)

export class UsuarioAlumnoModule {}
