import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  transform(value: string): string {
    
    const timeStamp = parseInt(value);
    const now = new Date().getTime();
    const difference = now-timeStamp;

    
    
    




    return 'now'
  }

}
