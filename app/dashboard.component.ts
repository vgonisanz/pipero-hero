import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { Router }           from '@angular/router';

import { Hero }             from './hero';
import { HeroService }      from './hero.service';

@Component(
{
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

/**
* @brief DashboardComponent
*
* Component to show all heroes provided by HeroService
*/
export class DashboardComponent implements OnInit
{
  // Variables
  heroes: Hero[] = [];

  // Functions
  constructor(
    private router: Router,
    private heroService: HeroService)
    { }

  /**
  * @brief Dashboard ngOnInit
  *
  * Callback called on app init to initalize Hero service and use 4 first values.
  */
  ngOnInit(): void
  {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

  /**
  * @brief gotoDetail
  *
  * Use internal routing to detais with hero get parameter to call hero-detail component.
  */
  gotoDetail(hero: Hero): void
  {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
