import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';

@NgModule(
    {
        imports:[
            CommonModule,
            ProfesoresRoutingModule
        ],
        declarations:[
            ProfesoresComponent
        ]
    }
)

export class ProfesoresModule {}