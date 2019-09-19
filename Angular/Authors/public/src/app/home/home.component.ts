import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: object[];

  constructor(private httpService: HttpService) {
    this.getAuthorsFromService();
  }

  ngOnInit() {
  }

  getAuthorsFromService() {
    const observable = this.httpService.getAuthors();
    observable.subscribe((data: object[]) => {
      console.log('Got our authors', data);
      this.authors = data;
    });
  }

  onDelete(id: string) {
    const observable = this.httpService.deleteAuthor(id);
    observable.subscribe((data: object) => {
      console.log('Author deleted', data);
      this.getAuthorsFromService();
    });
  }

}
