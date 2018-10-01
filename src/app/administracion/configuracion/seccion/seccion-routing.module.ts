import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SeccionComponent } from './seccion.component';

const routes: Routes = [
    {
        path: '',
        component: SeccionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SeccionRoutingModule {}