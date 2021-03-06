import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicloEscolarRoutingModule } from './ciclo-escolar-routing.module';
import { CicloEscolarComponent } from './ciclo-escolar.component';
import { FormsModule } from '@angular/forms';


@NgModule (
    {
        imports:[
            CommonModule,
            CicloEscolarRoutingModule,
            FormsModule
        ],
        declarations:[
            CicloEscolarComponent
        ]
    }
)

export class CicloEscolarModule {}