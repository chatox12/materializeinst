import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradoRoutingModule } from './grado-routing.module';
import { GradoComponent } from './grado.component';

@NgModule (
    {
        imports:[
            CommonModule,
            GradoRoutingModule
        ],
        declarations:[
            GradoComponent
        ]
    }
)

export class GradoModule {}