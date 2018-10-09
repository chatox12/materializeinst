import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent }  from './personal.component';
import { FormsModule } from '@angular/forms';

@NgModule(
    {
        imports:[
            CommonModule,
            PersonalRoutingModule,
            FormsModule
        ],
        declarations:[
            PersonalComponent
        ]
    }
)

export class PersonalModule {}