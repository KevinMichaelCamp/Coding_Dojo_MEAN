import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object;
  messages: string[];

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {name: '', email: ''};
    this.messages = [];
  }

  onSubmit() {
    this.messages = [];
    const observable = this._httpService.login(this.user);
    observable.subscribe((data: any) => {
      console.log('Log In Attempt:', data);
      if (data.errors) {
        console.log(data.errors);
        for (const i in data.errors) {
          this.messages.push(data.errors[i].message);
        }
      } else {
        this.router.navigate(['/index']);
      }
    });
  }

}
