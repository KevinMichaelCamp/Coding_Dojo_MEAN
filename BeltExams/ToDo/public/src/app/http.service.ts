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

  getAppointments() {
    return this._http.get('/appts');
  }

  getAppointment(id: string) {
    return this._http.get(`/appts/${id}`);
  }

  createAppointment(id: string, newAppointment: object) {
    return this._http.post(`/users/${id}`, newAppointment);
  }

  deleteAppointment(id: string) {
    return this._http.delete(`/appts/${id}`);
  }

  deleteApptFromUser(uid: string, aid: string) {
    return this._http.delete(`/users/${uid}/${aid}`);
  }
}
