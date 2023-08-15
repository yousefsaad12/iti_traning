import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

import { SeriesPageComponent } from './series-page/series-page.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = 
[
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesPageComponent},
  {path: 'series', component:SeriesPageComponent},
  {path: 'movie_details/:id', component:MovieDetialsComponent},
  {path: 'series-details/:id', component:SeriesDetailsComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
