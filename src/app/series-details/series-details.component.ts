import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesServiceService } from '../series-service.service';
import { Iseries } from '../series-page/Iseries';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780'
  selectedTvShowId:any = '';
  selectedTvShow!:any;
 

  constructor(public myRouts:ActivatedRoute, myTvSer:SeriesServiceService) {
    this.selectedTvShowId = myRouts.snapshot.paramMap.get('id');
    this.selectedTvShow = myTvSer.getTvShowByID(this.selectedTvShowId);
  }
}
