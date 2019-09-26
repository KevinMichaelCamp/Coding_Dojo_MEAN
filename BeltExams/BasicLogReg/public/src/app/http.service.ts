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

  getMovies() {
    return this._http.get('/movies');
  }

  getMovie(id: string) {
    return this._http.get(`/movies/${id}`);
  }

  createMovie(id: string, newMovie: object) {
    return this._http.post(`/users/${id}`, newMovie);
  }

  updateMovie(id: string, movie: object) {
    return this._http.put(`/movies/${id}`, movie);
  }

  updateUserMovie(uid: string, mid: string, movieEdit: object) {
    return this._http.put(`/users/${uid}/${mid}`, movieEdit);
  }

  deleteMovie(id: string) {
    return this._http.delete(`/movies/${id}`);
  }

  deleteMovieFromUser(uid: string, mid: string) {
    return this._http.delete(`/movies/${uid}/${mid}`);
  }
}
