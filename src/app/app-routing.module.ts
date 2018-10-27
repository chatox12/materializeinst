import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'admin', loadChildren: './administracion/administracion.module#AdministracionModule'},
    {path: 'alumno', loadChildren: './usuario-alumno/usuario-alumno.module#UsuarioAlumnoModule'},
    {path: 'catedratico', loadChildren: './catedratico/catedratico.module#CatedraticoModule'},
    { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
