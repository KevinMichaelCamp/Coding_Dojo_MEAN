import { Component, OnInit } from '@angular/core';
import { CakesService } from './cakes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: object[];
  cake: object;
  newCake: object;
  newComment: object;

  constructor(private cakesService: CakesService) {}

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = {baker: '', imgurl: ''};
    this.newComment = {rating: '', comment: ''};
  }

  getCakesFromService() {
    const observable = this.cakesService.getCakes();
    observable.subscribe((data: object[]) => {
      console.log('Got our cakes', data);
      this.cakes = data;
    });
  }

  getCakeFromService(id: string) {
    const observable = this.cakesService.getCake(id);
    observable.subscribe((data: object) => {
      console.log('Got 1 cake by ID', data);
      this.cake = data;
    });
  }

  onCreate() {
    const observable = this.cakesService.createCake(this.newCake);
    observable.subscribe((data: object) => {
      console.log('New cake created:', data);
      this.getCakesFromService();
    });
    this.newCake = { baker: '', imgurl: '' };
  }

  onComment(id: string) {
    const observable = this.cakesService.createComment(id, this.newComment);
    observable.subscribe((data: object[]) => {
      console.log('New comment added:', data);
      this.getCakeFromService(id);
    });
    this.newComment = { rating: '', comment: '' };
  }

}
