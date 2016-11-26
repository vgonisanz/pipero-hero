import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component(
{
  moduleId: module.id,
  selector: 'pipero-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

// App core component
export class HeroesComponent implements OnInit
{
  // Variables
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

    getHeroes(): void
    {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void
    {
      this.getHeroes();
    }

    onSelect(hero: Hero): void
    {
      this.selectedHero = hero;
    }

    gotoDetail(): void
    {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void
    {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }
    delete(hero: Hero): void
    {
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }
}
