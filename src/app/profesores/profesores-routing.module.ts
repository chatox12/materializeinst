import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProfesoresComponent } from './profesores.component';

const routes: Routes = [
    {
        path: '',
        component: ProfesoresComponent,
        children:[
            {path: '', redirectTo: 'index' },
            {path: 'index', loadChildren: './index/index.module#IndexModule'},
            {path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosModule' },
            {path: 'materia', loadChildren: './materias/materias.module#MateriasModule'},
            {path: 'notas', loadChildren: './notas/notas.module#NotasModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfesoresRoutingModule {}