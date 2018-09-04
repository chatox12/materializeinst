import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';

const routes: Routes = [{
    path: '',
    component:AdministracionComponent,
    children:[
        {path: '', redirectTo: 'index'},
        {path: 'index', loadChildren: './index/index.module#IndexModule'}
        //{path: 'ciclo-escolar', loadChildren: './configuracion/ciclo-escolar/ciclo-escolar.module#CicloescolarModule'},
        //{path: 'institucion', redirectTo: './configuracion/info-insitucion/info-insitucion.module#InfoinstitucionModule'},
        //{path: 'cursos', redirectTo: './cursos/cursos.module#CursosModule'},
        //{path: 'notas', redirectTo: './notas/notas.module#NotasModule'},
        //{path: 'pagos', redirectTo: './pagos/pagos.module#PagosModule'},
        //{path: 'administracion', redirectTo: './usuarios/administracion/administracion.module#AdminModule'},
        //{path: 'alumnos', redirectTo: './usuarios/alumnos/alumnos.module#AlumnosModule'},
        //{path: 'profesores', redirectTo: './usuarios/profesores/profesores.module#ProfesoresModule'},
    ]
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdministracionRoutingModule {}