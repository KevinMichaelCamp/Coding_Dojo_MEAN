import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  loggedIn: any;
  users: object[];

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.getUsersFromService();
      }
    });
    this.getSessionFromService();
    this.getUsersFromService();
  }

  getSessionFromService() {
    const observable = this._httpService.getSession();
    observable.subscribe((data: object) => {
      console.log('Getting logged in user', data);
      this.loggedIn = data;
    });
  }

  getUsersFromService() {
    const observable = this._httpService.getUsers();
    observable.subscribe((data: object[]) => {
      console.log('Getting users', data);
      this.users = data;
    });
  }

  onDelete(mid: string) {
    console.log('wah', this.loggedIn._id);
    const movieObs = this._httpService.deleteMovie(mid);
    movieObs.subscribe((data: object) => {
      console.log('Deletingfrom Movie DB:', data);
    });

    const userObs = this._httpService.deleteMovieFromUser(this.loggedIn._id, mid);
    userObs.subscribe((data: any) => {
      console.log('Deleting from User DB', data);
    });

    this.getUsersFromService();
    this.gotoIndex();
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
