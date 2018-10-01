import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAlumnoComponent } from './usuario-alumno.component'; 

const routes: Routes = [
    {
        path: '',
        component: UsuarioAlumnoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class UsuarioAlumnoRoutingModule {}