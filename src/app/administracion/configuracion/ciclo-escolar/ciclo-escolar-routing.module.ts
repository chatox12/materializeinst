import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CicloEscolarComponent } from './ciclo-escolar.component';

const routes: Routes = [
    {
        path: '',
        component: CicloEscolarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CicloEscolarRoutingModule {}