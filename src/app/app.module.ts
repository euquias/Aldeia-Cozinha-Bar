import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BodyComponent } from './components/template/body/body.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { IconsComponent } from './components/template/header/icons/icons.component';
import { CarroselComponent } from './components/template/header/carrosel/carrosel.component';
import { InforComponent } from './components/template/header/infor/infor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IconsComponent,
    CarroselComponent,
    InforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
