import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [MainPage, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule
  ],
  exports:[MainPage]
})
export class DbzModule { }
