import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartMovies=[]
  constructor(private mySer:MovieServiceService){}

  ngOnInit():void
  {
    this.mySer.getCart().subscribe({next:items=>{
      console.log(items);
      
    }})
  }
}
