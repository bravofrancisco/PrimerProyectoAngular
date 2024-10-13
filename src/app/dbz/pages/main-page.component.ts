import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-mai-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 8990 },
    { name: 'Vegeta', power: 1000 },
  ];

  onNewCharacter(character: Character): void {
    if (character.name.trim().length > 0 && character.power > 0) {
      this.characters.push(character);
      console.log('Lista de personajes actualizada:', this.characters);
    } else {
      console.warn('Personaje no válido:', character);
    }
  }

  public onDeleteId(index: number): void {
    this.characters.splice(index, 1); // Elimina el personaje
    console.log('Lista de personajes actualizada después de eliminar:', this.characters);
  }
}
