import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  milliseconds: number = 0;
  display: number = 0;
  startTime?: any;
  endTime?: any;

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
          setTimeout(() => {
            this.audio.pause();
            this.audio.currentTime = 0
          }, 1000);
        }
        if(this.milliseconds%this.breakStamp === 0){
          this.play = false;
        }
      }
    }, 10);
  }

  drawSoundStamp(){
    var soundStampPercent = (360 - (((this.soundStamp - this.milliseconds)/this.soundStamp)*360))%360;
    return {
      "background-image": `conic-gradient(transparent ${soundStampPercent}deg, white ${1/soundStampPercent}deg)`
    };
  }

  drawBreakStamp(){
    var breakStampPercent = (360 - (((this.breakStamp - this.milliseconds)/this.breakStamp)*360))%360;
    return {
      "background-image": `conic-gradient(transparent ${breakStampPercent}deg, white ${1/breakStampPercent}deg)`
    };
  }

  increment(){
    if(this.play){
      this.milliseconds += 1;
    }    
  }

  reset(){
    this.milliseconds = 0;
  }

  clear(){
    if(this.addSoundStamp){
      this.soundStamp = 0;
    }else if(this.addBreakStamp){
      this.breakStamp = 0;
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
