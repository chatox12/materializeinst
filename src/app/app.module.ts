import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AdminguardGuard } from './adminguard.guard';
import { AlumnoGuard } from './alumno.guard';
import { CatedraticoGuard } from './catedratico.guard';
//para las rutas
import { AppRoutingModule } from './app-routing.module';

//componente principal
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdminguardGuard,
    AlumnoGuard,
    CatedraticoGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
