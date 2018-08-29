import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './administracion/componets/navbar/navbar.component';
import { SidebarComponent } from './administracion/componets/sidebar/sidebar.component';
import { IndexComponent } from './administracion/index/index.component';
import { SeccionComponent } from './administracion/seccion/seccion.component';
import { CursosComponent } from './administracion/cursos/cursos.component';
import { NotasComponent } from './administracion/notas/notas.component';
import { AdministracionComponent } from './administracion/usuarios/administracion/administracion.component';
import { ProfesoresComponent } from './administracion/usuarios/profesores/profesores.component';
import { AlumnosComponent } from './administracion/usuarios/alumnos/alumnos.component';
import { PagosComponent } from './administracion/pagos/pagos.component';
import { InfoInstitucionComponent } from './administracion/configuracion/info-institucion/info-institucion.component';
import { CicloEscolarComponent } from './administracion/configuracion/ciclo-escolar/ciclo-escolar.component';
import { Component } from './.component';
import { MateriasComponent } from './profesores/materias/materias.component';
import { InstitucionComponent } from './institucion/institucion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    IndexComponent,
    SeccionComponent,
    CursosComponent,
    NotasComponent,
    AdministracionComponent,
    ProfesoresComponent,
    AlumnosComponent,
    PagosComponent,
    InfoInstitucionComponent,
    CicloEscolarComponent,
    Component,
    MateriasComponent,
    InstitucionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
