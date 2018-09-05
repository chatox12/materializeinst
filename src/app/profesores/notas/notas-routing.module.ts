import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './notas.component';

const routes: Routes = [
    {
        path: '',
        component: NotasComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class NotasRoutingModule {}