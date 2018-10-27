import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';


import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

import { AdminguardGuard } from '../adminguard.guard';

@NgModule({
    imports:[
        CommonModule,
        AdministracionRoutingModule,
        HttpClientModule
    ],
    declarations:[
        AdministracionComponent,
        SidebarComponent,
        NavbarComponent,
    ],
    providers: [AdminguardGuard ]
})


export class AdministracionModule {}
