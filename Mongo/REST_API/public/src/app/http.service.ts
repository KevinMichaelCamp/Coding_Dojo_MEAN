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
  getTasksID(id: string) {
    return this.http.get(`/tasks/${id}`);
  }
  createTask(newTask: object) {
    return this.http.post('/tasks', newTask);
  }
  // updateTask(id: string, body) {
  //   return this.http.patch(`/tasks/${id}`);
  // }
  deleteTask(id: string) {
    return this.http.delete(`/tasks/${id}`);
  }

}
