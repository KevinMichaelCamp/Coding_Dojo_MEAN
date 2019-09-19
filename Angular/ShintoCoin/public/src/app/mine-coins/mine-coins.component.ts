import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  answer: any;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.answer = '';
  }

  onSubmit() {
    if (this.answer == 13) {
      this.httpService.mine();
      this.answer = 'Correct!';
      console.log('right');
    } else {
      this.answer = 'Wrong!';
      console.log('wrong');
    }
    this.router.navigate(['home']);
  }

}
