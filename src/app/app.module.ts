import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './odd-component/odd-component.component';
import { EvenComponentComponent } from './even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
