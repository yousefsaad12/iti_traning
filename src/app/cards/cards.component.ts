import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Imovie } from '../movies-page/Imove';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';

  constructor(public myMovieSer: MovieServiceService){}

  allmovies:Imovie[] = [];

  ngOnInit() : void
  {
     this.allmovies = this.myMovieSer.getAllMovies();
  }
  searchtext:string = '';
  
  onSearchTextEntered(searchval: string)
  {
    this.searchtext = searchval;
    //console.log(this.searchtext);
  }

}

