import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  entered_search_val:string = '';
  @Output()
  search_text_change:EventEmitter<string> = new EventEmitter<string>();

  on_search_text_change()
  {
    this.search_text_change.emit(this.entered_search_val);
   
  }
}
