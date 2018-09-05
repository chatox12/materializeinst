import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';

const routes: Routes = [{
    path: '',
    component:AdministracionComponent,
    children:[
        {path: '', redirectTo: 'index'},
        {path: 'index', loadChildren: './index/index.module#IndexModule'},
        {path: 'ciclo', loadChildren: './configuracion/ciclo-escolar/ciclo-escolar.module#CicloEscolarModule'},
        {path: 'institucion', loadChildren: './configuracion/info-insitucion/info-institucion.module#InfoInstitucionModule'},
        {path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'},
        {path: 'notas', loadChildren: './notas/notas.module#NotasModule'},
        {path: 'pagos', loadChildren: './pagos/pagos.module#PagosModule'},
        {path: 'administracion', loadChildren: './usuarios/administracion/administracion.module#AdministracionModule'},
        {path: 'alumnos', loadChildren: './usuarios/alumnos/alumnos.module#AlumnosModule'},
        {path: 'profesores', loadChildren: './usuarios/profesores/profesores.module#ProfesoresModule'},
    ]
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdministracionRoutingModule {}