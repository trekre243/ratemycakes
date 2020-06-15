import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input('cake') cake: Object;
  average_rating: number;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if(this.cake['ratings'].length == 0) {
      this.average_rating = 0;
      return;
    }
    let sum = 0;
    for(var rating of this.cake['ratings']) {
      sum += rating['rating'];
    }
    this.average_rating = sum / this.cake['ratings'].length;
  }

}
