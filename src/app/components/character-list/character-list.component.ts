import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  groupedCharacters: { [species: string]: any[] } = {};

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      (data: any) => {
        const characters = data.results.map((character: any) => ({
          name: character.name,
          species: character.species || 'Desconocida',
          origin: character.origin?.name || 'Desconocido',
          image: character.image
        }));

        this.groupedCharacters = characters.reduce((groups: any, character: any) => {
          const species = character.species;
          if (!groups[species]) {
            groups[species] = [];
          }
          groups[species].push(character);
          return groups;
        }, {});
      },
      (error: any) => {
        console.error('Error al obtener personajes:', error);
      }
    );
  }
}
