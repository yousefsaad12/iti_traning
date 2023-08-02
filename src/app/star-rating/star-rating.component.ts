import {  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input() rating !: any; //late

  @Output() dataFromChildEvent: EventEmitter<string> =
    new EventEmitter<string>();

  clipWidth: number = 0;

  constructor() {}
  ngOnChanges(): void {
    this.clipWidth = (this.rating * 75) / 10;
  }
  onDataPassed(){
    //hello from your child with rating
   this.dataFromChildEvent.emit(`hello from your child with rating ${this.rating/2}`)
  //  console.log("firing event");
   
}
}
