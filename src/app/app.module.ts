import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T0DoComponent } from './mycomponents/t0-do/t0-do.component';
import { ToDoitemComponent } from './mycomponents/to-doitem/to-doitem.component';

@NgModule({
  declarations: [
    AppComponent,
    T0DoComponent,
    ToDoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
