import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class dbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 8990 },
    { id: uuid(), name: 'Vegeta', power: 1000 },
  ];

  addCharacter(character: Character): void {
    const NewCharacter: Character = { id: uuid(), ...character };
    this.characters.push(character);
  }

  //   public onDeleteId(index: number): void {
  //     this.characters.splice(index, 1); // Elimina el personaje
  //     console.log(
  //       'Lista de personajes actualizada después de eliminar:',
  //       this.characters
  //     );
  //   }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (characters) => characters.id !== id
    );
  }
}
