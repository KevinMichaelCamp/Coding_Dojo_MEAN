import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  surveyID: any;
  survey: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Survey ID:', params.id);
      this.surveyID = params.id;
    });
    this.getSurveyFromService();
  }

  getSurveyFromService() {
    const observable = this._httpService.getSurvey(this.surveyID);
    observable.subscribe((data: any) => {
      console.log('Got 1 survey by ID', data);
      this.survey = data;
    });
  }


}
