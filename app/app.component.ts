import { Component } from '@angular/core';

@Component(
{
  moduleId: module.id,
  selector: 'pipero-hero-editor',
  styleUrls: ['app.component.css'],
  template:
  `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

/**
* @brief AppComponent
*/
export class AppComponent
{
  title = 'Heroes of Pipero, the APP';
}
