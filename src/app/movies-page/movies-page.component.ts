import { Component, OnInit } from '@angular/core';
import { Imovie } from './Imove';
import { MovieServiceService } from '../movie-service.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';
  allmovies:Imovie[] = [];
  currentPage:number = 1;
  totalPages:number = 0

  constructor(public myMovie:MovieServiceService){}

  
 
}
