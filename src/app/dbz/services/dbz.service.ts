import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inteface';

@Injectable({
  providedIn: 'root',
})
export class dbzService {
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
    console.log(
      'Lista de personajes actualizada después de eliminar:',
      this.characters
    );
  }
}
