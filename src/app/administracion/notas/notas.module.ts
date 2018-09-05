import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';

@NgModule(
    {
        imports:[
            CommonModule,
            NotasRoutingModule
        ],
        declarations:[
            NotasComponent
        ]
    }
)

export class NotasModule {}