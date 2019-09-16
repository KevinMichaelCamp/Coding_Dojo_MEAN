import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get('/tasks');
  }
  getTasksID() {
    return this.http.get('/tasks/5d7d50d1ebc9126b0877e3ce');
  }
  deleteTask() {
    return this.http.get('/tasks/5d7d4bc68b195e04d103590c');
  }
}
