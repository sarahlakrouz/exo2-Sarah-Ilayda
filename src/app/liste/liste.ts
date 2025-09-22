
import { Component } from '@angular/core';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.html',
  imports: [],
  styleUrls: ['./liste.scss']
})
export class Liste{

  films = [
    { title: 'F1 le film', poster: 'assets/f1.jpeg' },
    { title: 'Divergent', poster: 'assets/divergent.jpeg' },
    { title: 'Black Panther', poster: 'assets/blackpanther.jpeg' },
    { title: 'La La Land', poster: 'assets/lalaland.jpeg' },
    { title: 'Spiderman: No Way Home', poster: 'assets/spiderman.jpeg' }
  ];


  selectedFilm: { title: string, poster: string } | null = null;


  public selectFilm(film: { title: string, poster: string }) {
    this.selectedFilm = film;
  }
}
