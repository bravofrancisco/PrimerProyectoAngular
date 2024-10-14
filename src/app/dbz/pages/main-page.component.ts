import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mai-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  constructor(public dbzService:dbzService)
  {
    
  }
}
