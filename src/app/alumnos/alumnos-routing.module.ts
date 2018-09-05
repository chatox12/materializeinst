import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
{
    path: '',
    component: AlumnosComponent,
    children:[
        {path: '', redirectTo: 'alumnos'},
        {path: 'alumnos', loadChildren: './notas/notas.module#NotasModule'}
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlumnosRoutingModule {}