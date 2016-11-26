import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

/**
* @brief HeroService
*
* Service with decorator injectable to load heroes from a web API
*/
@Injectable()
export class HeroService
{
  // Variables
  private heroesUrl = 'app/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  // Functions
  constructor(private http: Http) { }

  /**
  * @brief create
  *
  * Function to get with a HTTP petition to Hero URL via routing to HeroesComponent in JSON format
  * @param[in]  name              Hero's name
  * @return     Promise<Hero>     Hero object asynchronous
  */
  create(name: string): Promise<Hero>
  {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  /**
  * @brief update
  *
  * Function to
  */
  update(hero: Hero): Promise<Hero>
  {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  /**
  * @brief delete
  *
  * Function to
  */
  delete(id: number): Promise<void>
  {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  /**
  * @brief getHero
  *
  * Function to
  * @param[in]  id      Number of hero to get by id.
  */
  getHero(id: number): Promise<Hero>
  {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  /**
  * @brief getHeroes
  *
  * Function to use HeroService to update hero object
  */
  getHeroes(): Promise<Hero[]>
  {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  /**
  * @brief getHeroesSlowly
  *
  * Function to 
  */
  getHeroesSlowly(): Promise<Hero[]>
  {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  /**
  * @brief handleError
  *
  * Function to
  */
  private handleError(error: any): Promise<any>
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
