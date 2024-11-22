import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
goToCharacterList(arg0: any) {
throw new Error('Method not implemented.');
}
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharactersBySpecies('human').subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
