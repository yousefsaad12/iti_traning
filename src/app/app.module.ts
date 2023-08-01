import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    SearchBarComponent,
    HomeComponent,
    MoviesPageComponent,
    SeriesCardComponent,
    SeriesPageComponent,
    MovieDetialsComponent,
    SeriesDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
