import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { AdminguardGuard } from '../adminguard.guard';

const routes: Routes = [{
    path: '',
    component:AdministracionComponent,
    canActivateChild: [AdminguardGuard ],
    children:[
        {path: '', redirectTo: 'index'},
        {path: 'index', loadChildren: './index/index.module#IndexModule'},
        {path: 'ciclo', loadChildren: './configuracion/ciclo-escolar/ciclo-escolar.module#CicloEscolarModule'},
        {path: 'notas/:id', loadChildren: './configuracion/info-institucion/info-institucion.module#InfoInstitucionModule'},
        {path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'},
        {path: 'notas', loadChildren: './notas/notas.module#NotasModule'},
        {path: 'pagos', loadChildren: './pagos/pagos.module#PagosModule'},
        {path: 'alumnos', loadChildren: './usuarios/alumnos/alumnos.module#AlumnosModule'},
        {path: 'grado', loadChildren: './configuracion/grado/grado.module#GradoModule'},
        {path: 'personal', loadChildren: './personal/personal.module#PersonalModule'},
        {path: 'seccion', loadChildren: './configuracion/seccion/seccion.module#SeccionModule'},
        { path: '**', redirectTo: 'index', pathMatch: 'full' },
    ]
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdministracionRoutingModule {}
