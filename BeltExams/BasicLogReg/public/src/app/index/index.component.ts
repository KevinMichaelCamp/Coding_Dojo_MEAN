import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  loggedIn: object;
  users: object[];

  constructor(
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
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

}
