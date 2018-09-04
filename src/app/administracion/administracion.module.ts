import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
    imports:[
        CommonModule,
        AdministracionRoutingModule
    ],
    declarations:[
        AdministracionComponent,
        SidebarComponent,
        NavbarComponent
    ],
    providers: [ ]
})


export class AdministracionModule {}