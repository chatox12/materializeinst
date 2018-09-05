import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasComponent } from './materias.component';

@NgModule(
    {
        imports:[
            CommonModule,
            MateriasRoutingModule
        ],
        declarations:[
            MateriasComponent
        ]
    }
)

export class MateriasModule {}