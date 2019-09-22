import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  answer: any;
  message: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.answer = '';
    this.message = '';
  }

  onSubmit() {
    if (this.answer === 13) {
      this.message = 'Correct Answer! You mined 1 ShintoCoin';
      this._httpService.mine();
      this.answer = '';
    } else {
      this.message = 'Wrong Answer';
    }
  }

}
