import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  public emitCharacter(): void {
    console.log('Emitir personaje:', this.character);
    if (this.character.name.trim().length === 0 || this.character.power <= 0) return; // Agrega la condición para el poder
    this.onNewCharacter.emit({ ...this.character }); // Emite una copia del personaje
    this.character.name = '';
    this.character.power = 0;
}

}
