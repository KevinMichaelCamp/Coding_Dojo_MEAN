import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveys: object[];
  users: object[];
  user: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSurveysFromService();
    this.getUsersFromService();
    this.getLoggedInFromService();
  }

  getSurveysFromService() {
    const observable = this._httpService.getSurveys();
    observable.subscribe((data: object[]) => {
      // console.log('Got our surveys:', data);
      this.surveys = data;
    });
  }

  getUsersFromService() {
    const observable = this._httpService.getUsers();
    observable.subscribe((data: object[]) => {
      // console.log('Got our users:', data);
      this.users = data;
    });
  }

  getLoggedInFromService() {
    this.user = this._httpService.getLoggedIn();
    console.log('hey', this.user);
  }

}
