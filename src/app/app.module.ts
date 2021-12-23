import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { DisplayTimePipe } from './shared/pipe/display-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DisplayTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
