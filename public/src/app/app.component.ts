import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  baker: string = '';
  imageUrl: string = '';
  cakes = [];
  selectedCake: number = -1;

  constructor(private _httpservice: HttpService) {}

  ngOnInit() {
    this._httpservice.getCakes().subscribe(data => {
      if(data['message'] == 'success') {
        this.cakes = data['data'];
      }
    });
  }

  createCake() {
    this._httpservice.createCake({
      baker: this.baker,
      image_url: this.imageUrl
    }).subscribe(data => {
      if(data['message'] == 'success') {
        this.cakes.push(data['data']);
        this.baker = '';
        this.imageUrl = '';
      }
    });
  }

  updateDetails(i) {
    this.selectedCake = i;
    this._httpservice.getCakes().subscribe(data => {
      this.cakes = data['data'];  
    });
  }

  // Slight optimization: Make the get cakes its own method, and call that 
  // in ngOnInit and updateDetails.

}
