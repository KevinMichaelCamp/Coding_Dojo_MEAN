import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _HTTP: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    const authorsIndex = this._HTTP.get('/authors');
    authorsIndex.subscribe(authors => console.log('Got our authors', authors));
  }
}
