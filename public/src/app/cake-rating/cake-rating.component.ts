import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake-rating',
  templateUrl: './cake-rating.component.html',
  styleUrls: ['./cake-rating.component.css']
})
export class CakeRatingComponent implements OnInit {

  @Input('cake') cake: Object;
  @Input('index') index: number;

  @Output() cakeSelected = new EventEmitter();
  
  rating: string;
  comment: string;
  ratingLabel: string = 'Rating';

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {

  }

  addRating() {
    this._httpservice.addRating(this.cake['_id'], {
      rating: Number(this.rating),
      comment: this.comment
    }).subscribe(data => {
      if(data['message'] == 'success') {
        this.comment = '';
      }
    });
  }

  selectChanged() {
    this.ratingLabel = '';
  }

  onCakeSelect() {
    this.cakeSelected.emit(this.index);
  }

}
