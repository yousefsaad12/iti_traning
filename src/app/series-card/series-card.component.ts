import { Component } from '@angular/core';
import { Iseries } from '../series-page/Iseries';
import { SeriesServiceService } from '../series-service.service';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent {
  basepath = 'https://image.tmdb.org/t/p/w780'

  allTvShows:Iseries[] = [] 
  constructor(public mySer:SeriesServiceService)
  {
    this.allTvShows = mySer.getAllSeries();
  }
}
