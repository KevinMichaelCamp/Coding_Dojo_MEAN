import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  loggedIn: object;
  idMovie: string;
  idOwner: string;
  owner: object;
  movie: any;
  movieEdit: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSessionFromService();
    this.getParams();
    this.getMovieFromService();

  }

  getSessionFromService() {
    const observable = this._httpService.getSession();
    observable.subscribe((data: object) => {
      console.log('Getting logged in user', data);
      this.loggedIn = data;
    });
  }

  getParams() {
    this.route.params.subscribe((params: Params) => {
      console.log('Movie ID:', params.id);
      this.idMovie = params.id;
    });
  }

  getMovieFromService() {
    const observable = this._httpService.getMovie(this.idMovie);
    observable.subscribe((data: object) => {
      console.log('Getting movie by ID:', data);
      this.movie = data;
    });
  }

  getUserFromService() {
    const observable = this._httpService.getUser(this.idOwner);
    observable.subscribe((data: object) => {
      console.log('Getting owner:', data);
      this.owner = data;
    });
  }

  onSubmit() {
    this.movieEdit = this.movie;
    this.idOwner = this.movie._user;
    this.getUserFromService();

    this.movieEdit.likes ++;
    const movieObs = this._httpService.updateMovie(this.idMovie, this.movieEdit);
    movieObs.subscribe((data: object) => {
      console.log('Adding like to movie DB', data);
    });

    const userObs = this._httpService.updateUserMovie(this.idOwner, this.idMovie, this.movieEdit);
    userObs.subscribe((data: object) => {
      console.log('Added like in user DB', data);
    });

  }

  logout() {
    const observable = this._httpService.logout();
    observable.subscribe((data: object) => {
      console.log('logging off...', data);
    });
    this.gotoLogin();
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoIndex() {
    this.router.navigate(['/index'], {
      queryParams: { refresh: new Date().getTime() }
    });
  }
}
