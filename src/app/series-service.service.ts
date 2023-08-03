import { Injectable } from '@angular/core';
import { Iseries } from './series-page/Iseries';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesServiceService {
  //https://api.themoviedb.org/3/tv/popular
  apiKey = '0eef1278ac4121ffed668457cfa1ad2e';

  constructor(public http:HttpClient) { }
  

  getAllSeries(pageNum:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&page=${pageNum}`);
  }


  getTvShowByID(seriesId:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${this.apiKey}`)
  }

}