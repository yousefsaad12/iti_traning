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
  listofPageSize = [5, 10, 25, 100];
  pageSize:number = 5;
  allmovies:Imovie[] = [];
  totalItems:number = 0;

  constructor(private myMovie: MovieServiceService){}

  ngOnInit():void
  {
    this.myMovie.getAllMovies(this.currentPage,this.pageSize).subscribe({next:(moviesData)=>{
      
      this.allmovies = moviesData;
       
    }})
  }


  changePage(pageData:PageEvent)
  {
    this.currentPage=pageData.pageIndex+1;
    this.pageSize=pageData.pageSize;
    this.myMovie.getAllMovies(this.currentPage,this.pageSize).subscribe({next:(movieData)=>{
      console.log(movieData);
      this.allmovies=movieData;
      this.totalItems=movieData.length;
      
    }})
  }

  addToCart(movie:Imovie)
  {
    this.myMovie.addToCart(movie).subscribe({
      next:(data)=>{
        console.log(data);
      }
    });
  }

}

