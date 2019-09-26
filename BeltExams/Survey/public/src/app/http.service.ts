import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSwitchCase } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  user: object;
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getUser(name: string) {
    return this._http.get(`/users/${name}`);
  }

  getUsers() {
    return this._http.get('/users');
  }

  createUser(newUser: object) {
    return this._http.post('/users/', newUser);
  }

  getSurveys() {
    return this._http.get('/surveys');
  }

  getSurvey(id: string) {
    return this._http.get(`/surveys/${id}`);
  }

  createSurvey(id: string, newSurvey: object) {
    console.log(id, newSurvey);
    return this._http.post(`/users/${id}`, newSurvey);
  }

  deleteSurvey(id: string) {
    return this._http.delete(`/surveys/${id}`);
  }

  logIn(name: string) {
    const observable = this._http.get(`/users/${name}`);
    observable.subscribe((data: object) => {
      console.log('Logging user into session', data);
      this.user = data;
    });
  }

  logOut() {
    this.user = {name: ''};
  }

  getLoggedIn() {
    return this.user;
  }

}
