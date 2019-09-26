import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newSurvey: object;
  user: any;
  message: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this._httpService.user;
    console.log('Yo', this.user);
    this.message = '';
    this.newSurvey = {
      question: '',
      option_1: { answer: '', votes: 0 },
      option_2: { answer: '', votes: 0 },
      option_3: { answer: '', votes: 0 },
      option_4: { answer: '', votes: 0 },
    };
  }

  onNew() {
    this.message = '';
    console.log(this.user._id, this.newSurvey);
    const observable = this._httpService.createSurvey(this.user._id, this.newSurvey);
    observable.subscribe((data: any) => {
      if (data.errors) {
        console.log(data.errors);
      } else {
        console.log('New survey', data);
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
