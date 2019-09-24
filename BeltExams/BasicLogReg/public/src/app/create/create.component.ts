import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  loggedIn: any;
  movie: object;
  messages: string[];

  constructor(
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSessionFromService();
    this.movie = {title: '', year: ''}
    this.messages = [];
  }

  getSessionFromService() {
    const observable = this._httpService.getSession();
    observable.subscribe((data: object) => {
      console.log('Getting logged in user', data);
      this.loggedIn = data;
    });
  }

  onSubmit() {
    this.messages = [];
    const observable = this._httpService.createMovie(this.loggedIn._id, this.movie);
    observable.subscribe((data: any) => {
      if (data.errors) {
        for (let i in data.errors) {
          this.messages.push(data.errors[i].message);
        }
      } else {
        console.log('New movie added', data);
        this.gotoIndex();
      }
    })
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
