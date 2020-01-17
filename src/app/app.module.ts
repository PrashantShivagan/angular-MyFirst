import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Coursedata } from './coursedata';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyFirstApp } from './firstapp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ Coursedata]

})
export class AppModule { }
