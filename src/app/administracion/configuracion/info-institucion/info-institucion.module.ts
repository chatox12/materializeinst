import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoInstitucionRoutingModule } from './info-institucion-routing.module';
import { InfoInstitucionComponent } from './info-institucion.component';

@NgModule(
    {
        imports:[
            CommonModule,
            InfoInstitucionRoutingModule
        ],
        declarations:[
            InfoInstitucionComponent
        ]
    }
)

export class InfoInstitucionModule {}