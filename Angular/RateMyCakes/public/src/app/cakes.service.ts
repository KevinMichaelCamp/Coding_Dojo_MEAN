import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private http: HttpClient) {}

  getCakes() {
    return this.http.get('/cakes');
  }

  getCake(id: string) {
    return this.http.get(`/cakes/${id}`);
  }

  createCake(newCake: object) {
    return this.http.post('/cakes', newCake);
  }

  createComment(id: string, newComment: object) {
    return this.http.patch(`/cakes/${id}`, newComment);
  }
}
