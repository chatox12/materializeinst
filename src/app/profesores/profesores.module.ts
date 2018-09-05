import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        ProfesoresRoutingModule
    ],
    declarations:[
        ProfesoresComponent,
        SidebarComponent,
        NavbarComponent
    ]
})

export class ProfesoresModule {}