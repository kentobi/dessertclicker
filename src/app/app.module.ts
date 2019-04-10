import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { MoneyComponent } from './money/money.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    MoneyComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
