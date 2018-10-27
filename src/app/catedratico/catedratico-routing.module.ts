import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatedraticoComponent } from './catedratico.component';
import { CatedraticoGuard } from '../catedratico.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [CatedraticoGuard],
        component: CatedraticoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class CatedraticoRoutingModule {}
