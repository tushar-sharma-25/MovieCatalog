import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent {

  moviesList = [
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      showDescription: false
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      showDescription: false
    },
    {
      title: 'Movie 3',
      description: 'Description for Movie 3',
      showDescription: false
    },
    // Add more movies to the list
  ];
  toggleDescription(movie: any) {
    movie.showDescription = !movie.showDescription;
  }
}
