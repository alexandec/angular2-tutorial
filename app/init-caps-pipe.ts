import {Pipe} from 'angular2/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe {
  private _capFirstLetter(word: string) {
    return word ? word[0].toUpperCase() + word.slice(1) : '';
  }
  
  public transform(value: string) {
    return value.toLowerCase().split(' ')
      .map(word => this._capFirstLetter(word))
      .join(' ');
  }
}