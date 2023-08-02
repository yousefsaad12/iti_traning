import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';

  selectedmovie!:any
  selectedMovieId:any='';
  
  constructor(public myRouts:ActivatedRoute, myMoiveSer:MovieServiceService) {
    
    this.selectedMovieId = this.myRouts.snapshot.paramMap.get('id');
    this.selectedmovie = myMoiveSer.getMovieById(this.selectedMovieId)
   
  }

}