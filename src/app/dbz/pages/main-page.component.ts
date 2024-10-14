import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mai-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  constructor(private dbzService: dbzService) {}
  get character(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  addCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
