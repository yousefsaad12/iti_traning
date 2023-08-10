import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './Iproducts';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

     allProducts:IProduct [] = [];

     constructor(public prodSer:ProductService){}

   /*   ngOnInit():void
     {
       this.prodSer.getAllProducts().subscribe({next:(productsData)=>{
          console.log(productsData);
          this.allProducts = productsData;
          
       }})
     } */
}
