import { Pipe, PipeTransform } from '@angular/core';
import { FlyingHerosComponent } from "./flying-heros/flying-heros.component";

@Pipe({
  name: 'flyingHeros'
})
export class FlyingHerosPipe implements PipeTransform {

constructor(public flyingHerosComponent:FlyingHerosComponent){}
  transform(value:Array<any>, args?: any): any {
   return value.filter(hero => hero.canFly);
  }

}
