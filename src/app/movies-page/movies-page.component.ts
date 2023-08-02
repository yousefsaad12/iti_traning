import { Component, OnInit } from '@angular/core';
import { Imovie } from './Imove';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';
  allmovies:Imovie[] = [];

  constructor(public myMovie:MovieServiceService){}

  ngOnInit() : void
  {
     this.allmovies = this.myMovie.getAllMovies();
  }

  handelChildMsg(childMsg:string){
    console.log(childMsg);
    
  }
 
}
