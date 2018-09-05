import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';

@NgModule({
    imports:[
        CommonModule,
        AdministracionRoutingModule
    ],
    declarations:[
        AdministracionComponent
    ]
})

export class AdministracionModule {}