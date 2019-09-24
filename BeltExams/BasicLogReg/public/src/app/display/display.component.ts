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
  movie_ID: string;
  owner_ID: string;
  owner: object;
  movie: any;
  movieEdit: any;

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSessionFromService();
    this.getParams();
    this.getMovieFromService();
    this.movieEdit = this.movie;
    this.owner_ID = this.movie._user;
    console.log('yo', this.owner_ID);
    this.getUserFromService();
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
      this.movie_ID = params.id;
    })
  }

  getMovieFromService() {
    const observable = this._httpService.getMovie(this.movie_ID);
    observable.subscribe((data: object) => {
      console.log('Getting movie by ID:', data);
      this.movie = data;
    })
  }

  getUserFromService() {
    const observable = this._httpService.getUser(this.owner_ID);
    observable.subscribe((data: object) => {
      console.log('Getting owner:', data);
      this.owner = data;
    })
  }

  onSubmit() {
    this.movieEdit = this.movie;
    console.log('blah',this.movie._user);
    this.owner_ID = this.movie._user;
    console.log('yo', this.owner_ID);
    this.getUserFromService();

    // this.movieEdit.likes ++;
    // const movie_obs = this._httpService.updateMovie(this.movie_ID, this.movieEdit)
    // movie_obs.subscribe((data: object) => {
    //   console.log('Adding like to movie DB', data);
    // })





  }

  logout() {
    const observable = this._httpService.logout();
    observable.subscribe((data: object) => {
      console.log('logging off...', data);
    })
    this.gotoLogin();
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoIndex() {
    this.router.navigate(['/index']);
  }
}
