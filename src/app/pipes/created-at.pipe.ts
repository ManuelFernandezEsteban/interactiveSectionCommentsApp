import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  transform(value: string): string {
    
    const timeStamp = parseInt(value);
    const now = new Date().getTime();
    const difference = now-timeStamp;
   

    let seconds = Math.floor(difference/1000);   

    if (seconds<60){
      return `${seconds} seconds ago`;
    }  

    let minutes = Math.floor(seconds/60);    

    if (minutes<60) {
      return `${minutes} minutes ago`;
    }

    let hours = Math.floor(minutes/60);


    if (hours<24) {
      return `${hours} hours ago`;
    }

    let days = Math.floor(hours/24);

    if (days<7) {
      return `${days} days ago`;
    }
    let weeks = Math.floor(days/7);

    if (weeks<4){
      return `${weeks} weeks ago`;
    }

    let month = weeks/4;

    if (month<12){
      return `${month} months ago`
    }
   
    let years = Math.floor(month/12);
    
    return `${years} years ago`;
    
    
  }

}
