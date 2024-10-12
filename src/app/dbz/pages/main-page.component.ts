import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-mai-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 8990,
    },
    {
      name: 'Vegeta',
      power: 1000,
    },
  ];
}
