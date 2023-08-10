import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products/Iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient){}

  getAllMovies():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
}
