import { Component }                from '@angular/core';
import { Input }                    from '@angular/core';
import { OnInit }                   from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService }              from './hero.service';
import { Hero }                     from './hero';

@Component(
{
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})

/**
* @brief HeroDetailComponent
*
* Component to show and edit heroe details provided by HeroService
*/
export class HeroDetailComponent implements OnInit
{
  // Variables
  @Input() hero: Hero;  // Decorator input to apply to Hero object

  // Functions
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  /**
  * @brief Hero Detail ngOnInit
  *
  * Callback called on app init to get all heroes provided by a parameter array from a route using the Hero service.
  */
  ngOnInit(): void
  {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  /**
  * @brief goBack
  *
  * Function to use location component to go back (last page)
  */
  goBack(): void
  {
    this.location.back();
  }

  /**
  * @brief save
  *
  * Function to use HeroService to update hero object
  */
  save(): void
  {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }


}
