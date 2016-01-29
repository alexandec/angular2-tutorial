import {Component} from 'angular2/core';
import {Hero} from './hero';
import {InitCapsPipe} from './init-caps-pipe';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  pipes: [InitCapsPipe],
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      
      <div>Name after filter: {{hero.name | initCaps}}</div>
      
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  public hero: Hero;
}