import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTasksID();
    // this.deleteTask();
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getTasksID(){
    let tempObservable = this._http.get('/tasks/5d7ace1e7a81772a64fdc998');
    tempObservable.subscribe(data => console.log("We got 1 task!", data));
  }

  // deleteTask(){
  //   let tempObservable = this._http.delete('/tasks/5d7d4bc68b195e04d103590c');
  //   tempObservable.subscribe(result => console.log("Deleting 1 task", result))
  // }

}
