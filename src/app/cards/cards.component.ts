import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Imovie } from '../movies-page/Imove';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';
  currentPage:number = 1;
  totalPages:number = 0;
  allmovies:Imovie[] = [];

  constructor(public myMovie: MovieServiceService){}

  ngOnInit() : void
  {
    this.myMovie.getAllMovies(this.currentPage).subscribe({
      next:(apidata) => 
      {
        this.allmovies = apidata.results;
        this.totalPages = apidata.total_results;
      }

     });
  }

  handelChildMsg(childMsg:string){
    console.log(childMsg);
    
  }

  changePage(pageData: PageEvent)
  {
    this.currentPage = pageData.pageIndex + 1;
    this.myMovie.getAllMovies(this.currentPage).subscribe({
      next:(apidata) => 
      {
        this.allmovies = apidata.results;
        this.totalPages = apidata.total_results;
      }

     });
  }
}

