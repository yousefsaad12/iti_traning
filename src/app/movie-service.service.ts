import { Injectable } from '@angular/core';
import { Imovie } from './movies-page/Imove';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  apiKey = '0eef1278ac4121ffed668457cfa1ad2e';
  moviesApi = 'https://api.themoviedb.org/3/movie/now_playing'

  constructor(public http:HttpClient) { }

  foundedElement={}

  getAllMovies(pageNumber:number = 1):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=${pageNumber}`);
  }
  getMovieById(movieId:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`);   
  }

}