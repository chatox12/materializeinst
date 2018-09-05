import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesoresComponent } from './profesores.component';

const routes: Routes = [
    {
        path: '',
        component: ProfesoresComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class ProfesoresRoutingModule {}