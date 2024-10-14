import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], // Asegúrate de usar styleUrls
})
export class ListComponent {
  @Input() public characterList: Character[] = [];
  
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  ngOnChanges() {
    console.log('Lista de personajes recibida:', this.characterList);
  }

  deleteCharacter(id?: string): void {
    
    if(!id) return;
    console.log('Eliminar personaje en índice:', id);
    this.onDelete.emit(id); // Emitir el índice
  }
}
