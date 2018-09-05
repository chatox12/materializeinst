import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InfoInstitucionComponent } from './info-institucion.component';

const routes: Routes = [
    {
        path: '',
        component: InfoInstitucionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InfoInstitucionRoutingModule {}
