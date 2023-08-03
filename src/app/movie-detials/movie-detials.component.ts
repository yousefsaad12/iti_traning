import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';

  selectedmovie!:any;
  selectedMovieId:any='';
  moviesGenres:any[]=[];
  
  
  constructor(public myRouts: ActivatedRoute,public myMoviesSer:MovieServiceService) {
  }
  ngOnInit(): void {
    this.selectedMovieId = this.myRouts.snapshot.paramMap.get('id');
    this.myMoviesSer.getMovieById(this.selectedMovieId).subscribe({
      next:(data) =>
      {
        this.selectedmovie = data;
        this.moviesGenres = data.genres;
      } 
    }
      
    )
   
  }
}
