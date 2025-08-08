import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], ...args: unknown[]): Hero[] {
    return value.slice(0,10);
  }

}
