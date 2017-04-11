import {Pipe, PipeTransform} from '@angular/core';
import {Member} from './member.model';


@Pipe({
  name: "hikingWithKids",
  pure: false
})



export class HikingWithKidsPipe implements PipeTransform {
  transform(input: Member[]) {
  //   var output: Member[]=[];
  //   for(var i =0, i<input.length; i++){
  //     if(input[i].hikeWithKids === false){
  //       output.push(input[i]);
  //     }
  //   }
  //   return input;
  }
}
