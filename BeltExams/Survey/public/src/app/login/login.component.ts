import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  newUser: any;
  message: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = {name: ''};
    this.newUser = {name: ''};
    this.message = '';
  }

  onLogin() {
    this.message = '';
    console.log(this.user.name);
    const observable = this._httpService.getUser(this.user.name);
    observable.subscribe((data: any) => {
      if (data === 'No such user in database') {
        this.newUser = this.user;
        const newUser = this._httpService.createUser(this.newUser);
        newUser.subscribe((newData: any) => {
          if (newData.errors) {
            this.message = newData.errors.name.message;
          } else {
            console.log('New user created', newData);
            this._httpService.logIn(this.newUser.name);
          }
        });
      } else {
        this.user = data;
        this._httpService.logIn(this.user.name);
        console.log('After', this.user);
      }
    });
    this.gotoDashboard();
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}