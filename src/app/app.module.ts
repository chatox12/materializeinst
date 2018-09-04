import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//para las rutas
import { AppRoutingModule } from './app-routing.module';

//componente principal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
