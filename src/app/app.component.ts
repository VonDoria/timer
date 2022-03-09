import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timers: number = 1;

  addTimer(){
    this.timers += 1
  }

  timerCount(){
    return Array(this.timers).fill('')
  }

}
