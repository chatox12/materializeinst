import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 

const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'admin', loadChildren: './administracion/administracion.module#AdministracionModule'},
    //{path: 'catedratico', loadChildren: './profesores/profesores.module#profesorModule'},
    //{path: 'alumno', loadChildren: '.alumnos/alumnos.module#alumnosModule'},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}