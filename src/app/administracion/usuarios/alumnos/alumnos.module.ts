import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component'; 
import { FormsModule } from '@angular/forms';


@NgModule(
    {
        imports: [
            CommonModule,
            AlumnosRoutingModule,
            FormsModule
        ],
        declarations:[
            AlumnosComponent
        ]
    }
)

export class AlumnosModule {}