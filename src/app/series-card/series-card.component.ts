import { Component, OnInit } from '@angular/core';
import { Iseries } from '../series-page/Iseries';
import { SeriesServiceService } from '../series-service.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent {
  basepath = 'https://image.tmdb.org/t/p/w780'

  selectedpage = 1;
  allTvShows:Iseries[] = [] 
  totalPages:number = 0;
  constructor(public mySer:SeriesServiceService){}

  ngOnInit():void
  {
    this.mySer.getAllSeries(this.selectedpage).subscribe
    ({

      next:(data) =>
      {
        this.allTvShows = data.results;
        this.totalPages = data.total_results;
      }

    })
   
  }

  changePage(pageNum:PageEvent)
  {
    this.selectedpage = pageNum.pageIndex + 1;
    this.mySer.getAllSeries(this.selectedpage).subscribe
    ({
      next:(data) => 
      {
        this.allTvShows = data.results;
        this.totalPages = data.total_results;
      }
    })
  }
}
