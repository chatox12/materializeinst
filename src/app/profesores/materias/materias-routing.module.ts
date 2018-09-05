import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasComponent } from './materias.component';

const routes: Routes = [
    {
        path: '',
        component: MateriasComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class MateriasRoutingModule {}