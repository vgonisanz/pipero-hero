// General imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api, used to fake it
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// My imports
import './rxjs-extensions';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';


// Modules
@NgModule(
{
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations:
  [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers:
  [
    HeroService
  ],
  bootstrap:   [ AppComponent ]
})

// Exports
export class AppModule { }
