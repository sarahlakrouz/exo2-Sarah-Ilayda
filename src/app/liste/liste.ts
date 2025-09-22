
import { Component } from '@angular/core';
import {Film} from '../interfaces/films';


@Component({
  selector: 'app-liste',
  standalone: true,
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss']
})
export class Liste {
  films: Film[] = [
    { title: 'F1 le film', poster: 'assets/f1.jpeg' },
    { title: 'Divergent', poster: 'assets/divergent.jpeg' },
    { title: 'Black Panther', poster: 'assets/blackpanther.jpeg' },
    { title: 'La La Land', poster: 'assets/lalaland.jpeg' },
    { title: 'Spiderman: No Way Home', poster: 'assets/spiderman.jpeg' }
  ];

  selectedFilm: Film | null = null;

  public selectFilm(film: Film) {
    this.selectedFilm = film;
  }
}
