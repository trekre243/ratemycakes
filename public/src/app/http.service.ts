import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get('/api/cakes');
  }

  createCake(cake) {
    return this._http.post('/api/cakes', cake);
  }

  addRating(cake_id, rating) {
    return this._http.post(`/api/cakes/${cake_id}/ratings`, rating);
  }

}
