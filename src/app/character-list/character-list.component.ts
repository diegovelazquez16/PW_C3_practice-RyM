import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const species = params['species'];
      if (species) {
        this.rickAndMortyService.getCharactersBySpecies(species).subscribe((data: any) => {
          this.characters = data.results;
        });
      }
    });
  }
}
