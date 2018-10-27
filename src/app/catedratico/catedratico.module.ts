//componentes para angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes del routing
import { CatedraticoRoutingModule } from './catedratico-routing.module';
import { CatedraticoComponent } from './catedratico.component';
import { CatedraticoGuard } from '../catedratico.guard';

@NgModule(
    {
        imports: [
            CommonModule,
            CatedraticoRoutingModule
        ],
        declarations:[
            CatedraticoComponent
        ],
        providers: [CatedraticoGuard ]

    }
)

export class CatedraticoModule {}
