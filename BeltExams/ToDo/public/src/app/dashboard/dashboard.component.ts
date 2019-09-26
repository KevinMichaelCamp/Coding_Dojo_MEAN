import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedIn: any;
  users: object[];
  appts: object[];
  search: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSessionFromService();
    this.getUsersFromService();
    this.getApptsFromService();
    this.search = '';
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.getApptsFromService();
      }
    });
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

  getApptsFromService() {
    const observable = this._httpService.getAppointments();
    observable.subscribe((data: object[]) => {
      console.log('Getting appointments', data);
      this.appts = data;
    });
  }

  onClick() {
      this.router.navigate(['/new']);
  }

  onDelete(app_id: string) {
    const apptObs = this._httpService.deleteAppointment(app_id);
    apptObs.subscribe((data: object) => {
      console.log('Removing appt from appt DB', data);
    })

    const userObs = this._httpService.deleteApptFromUser(this.loggedIn._id, app_id);
    userObs.subscribe((data: object) => {
      console.log('Removing appt from user DB', data);
    })
    this.gotoDashboard();
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
  gotoDashboard() {
    this.router.navigate(['/dashboard'], {
      queryParams: { refresh: new Date().getTime() }
    });
  }

}
