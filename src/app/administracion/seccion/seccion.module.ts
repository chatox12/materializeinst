import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionRoutingModule } from './seccion-routing.module';
import { SeccionComponent } from './seccion.component';

@NgModule(
    {
        imports:[
            CommonModule,
            SeccionRoutingModule
        ],
        declarations:[
            SeccionComponent
        ]
    }
)

export class SeccionModule {}