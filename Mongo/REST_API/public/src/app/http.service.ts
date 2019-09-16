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
  getTasksID(id) {
    return this.http.get(`/tasks/${id}`);
  }
  deleteTask() {
    return this.http.get('/tasks/5d7d4bc68b195e04d103590c');
  }

}
