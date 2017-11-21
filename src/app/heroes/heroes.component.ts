import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

//   hero: Hero = {
//   	id: 1,
//   	name: 'Windstorm'
//   }

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
