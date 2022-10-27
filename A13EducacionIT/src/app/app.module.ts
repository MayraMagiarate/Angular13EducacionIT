import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { TarjetaPersonalComponent } from './tarjeta-personal/tarjeta-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosListaComponent,
    TarjetaPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
