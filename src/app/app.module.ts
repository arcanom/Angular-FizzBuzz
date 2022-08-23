import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './component/fizzbuzz/fizzbuzz.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
