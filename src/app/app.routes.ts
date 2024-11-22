import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character-list', component: CharacterListComponent },
];
