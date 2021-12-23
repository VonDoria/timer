import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {
    transform(milliseconds: number) : string {

        let seconds = Math.floor(milliseconds/100);
        let minutes = Math.floor(milliseconds/6000);
        let hours = Math.floor(milliseconds/360000);

        if(seconds >= 60){
            seconds = seconds%60
        }
        if(minutes >= 60){
            minutes = minutes%60
        }

        return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)},${('0' + milliseconds%100).slice(-2)}`;
    }
}