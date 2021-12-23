import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  milliseconds: number = 0;

  play: boolean = false;

  soundStamp: number = 0;
  addSoundStamp: boolean = false;
  breakStamp: number = 0;
  addBreakStamp: boolean = false;
  
  audio = new Audio('../../../assets/Alarm-ringtone.mp3');

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.increment();
      if(this.milliseconds > 0){
        if(this.milliseconds%this.soundStamp === 0 && this.play){
          this.audio.play();
          setTimeout(() => this.audio.pause(), 1000);
        }
        if(this.milliseconds%this.breakStamp === 0){
          this.play = false;
        }
      }
    }, 10);
  }

  increment(){
    if(this.play){
      this.milliseconds += 1;
    }
  }

  reset(){
    if(this.addSoundStamp){
      this.soundStamp = 0;
    }else if(this.addBreakStamp){
      this.breakStamp = 0;
    }else{
      this.milliseconds = 0;
    }
  }

  setSoundStamp(){
    this.addSoundStamp = !this.addSoundStamp;
    this.addBreakStamp = false;
  }

  setBreakStamp(){
    this.addBreakStamp = !this.addBreakStamp;
    this.addSoundStamp = false;
  }

  addTime(howMuch: number){
    if(this.addSoundStamp){
      this.soundStamp += howMuch;
    }else if(this.addBreakStamp){
      this.breakStamp += howMuch;
    }
  }
}
