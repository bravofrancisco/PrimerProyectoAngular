import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], // Asegúrate de usar styleUrls
})
export class ListComponent {
  @Input() public characterList: Character[] = [];
  
  @Output() public onDelete: EventEmitter<number> = new EventEmitter();

  ngOnChanges() {
    console.log('Lista de personajes recibida:', this.characterList);
  }

  deleteCharacter(index: number): void {
    console.log('Eliminar personaje en índice:', index);
    this.onDelete.emit(index); // Emitir el índice
  }
}
