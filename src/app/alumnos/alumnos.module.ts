import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';

@NgModule(
    {
        imports:[
            CommonModule,
            AlumnosRoutingModule
        ],
        declarations:[
            AlumnosComponent
        ]
    }
)

export class AlumnosModule {}