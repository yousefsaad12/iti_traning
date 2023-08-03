import { Component} from '@angular/core';
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
  TvGenres:any[]=[];

  constructor(public myRouts:ActivatedRoute, public myTvSer:SeriesServiceService) {}

  ngOnInit():void
  {
    this.selectedTvShowId = this.myRouts.snapshot.paramMap.get('id');
    this.myTvSer.getTvShowByID(this.selectedTvShowId).subscribe
    ({
        next:(data) =>
        {
          this.selectedTvShow = data;
          this.TvGenres = data.genres;
        }
    })
  }
  
}
