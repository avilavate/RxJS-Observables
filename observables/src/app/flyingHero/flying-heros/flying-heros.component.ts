import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'o-flying-heros',
  templateUrl: './flying-heros.component.html',
  styles: []
})
export class FlyingHerosComponent {

  public heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
     this.heroes = this.heroes.slice(0, this.heroes.length);
    // this.heroes.push(hero);
    this.heroes.push(hero);
  }

  reset() { this.heroes = this.heroes.slice(); }
}
