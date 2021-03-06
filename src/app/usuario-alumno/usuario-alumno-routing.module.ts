import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAlumnoComponent } from './usuario-alumno.component';
import { AlumnoGuard } from '../alumno.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AlumnoGuard ],
        component: UsuarioAlumnoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class UsuarioAlumnoRoutingModule {}
