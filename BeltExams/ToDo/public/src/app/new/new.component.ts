import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  loggedIn: any;
  newAppt: any;
  messages: string[];

  constructor(
    private _httpService: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSessionFromService();
    this.newAppt = {patient: '', complaint: '', date: '', time: ''};
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
    this.newAppt.patient = this.loggedIn.name;
    this.messages = [];
    const observable = this._httpService.createAppointment(this.loggedIn._id, this.newAppt);
    observable.subscribe((data: any) => {
      if (data.errors) {
        for (let i in data.errors) {
          this.messages.push(data.errors[i].message)
        }
        console.log(data.errors);
      } else {
        console.log('New appointment created', data);
        this.gotoDashboard();
      }
    });
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'], {
      queryParams: { refresh: new Date().getTime() }
    });
  }
}
