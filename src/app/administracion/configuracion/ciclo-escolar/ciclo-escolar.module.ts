import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicloEscolarRoutingModule } from './ciclo-escolar-routing.module';
import { CicloEscolarComponent } from './ciclo-escolar.component';

@NgModule (
    {
        imports:[
            CommonModule,
            CicloEscolarRoutingModule
        ],
        declarations:[
            CicloEscolarComponent
        ]
    }
)

export class CicloEscolarModule {}