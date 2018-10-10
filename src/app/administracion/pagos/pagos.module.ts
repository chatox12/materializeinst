import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent }  from './pagos.component';
import { FormsModule } from '@angular/forms';


@NgModule(
    {
        imports:[
            CommonModule,
            PagosRoutingModule,
            FormsModule
        ],
        declarations:[
            PagosComponent
        ]
    }
)

export class PagosModule {}