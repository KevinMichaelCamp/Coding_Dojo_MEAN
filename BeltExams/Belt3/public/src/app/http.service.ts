import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  login(user: object) {
    return this._http.post('/session', user);
  }

  logout() {
    return this._http.get('/session/logout');
  }

  getSession() {
    return this._http.get('/session');
  }

  getUsers() {
    return this._http.get('/users');
  }

  getUser(id: string) {
    return this._http.get(`/users/${id}`);
  }
}
