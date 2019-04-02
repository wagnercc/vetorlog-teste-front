import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from 'src/services/api.service';
import { ListarDadosComponent } from './listar-dados/listar-dados.component';
import { CarouselEquivalenciasComponent } from './carousel-equivalencias/carousel-equivalencias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListarDadosComponent,
    CarouselEquivalenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot() // Modulo bootstrap
  ],
  providers: [
    ApiService,
    ListarDadosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
