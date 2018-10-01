import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FormsModule } from '@angular/forms';

@NgModule(
    {
        imports:[
            CommonModule,
            CursosRoutingModule,
            FormsModule
        ],
        declarations:[
            CursosComponent
        ]
        
    }
)

export class CursosModule {}