import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newAuthor: object;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ''};
    this.route.params.subscribe((params: Params) => {
        console.log(params['id'])
    });
  }

  onCreate() {
    const observable = this.httpService.createAuthor(this.newAuthor);
    observable.subscribe((data: object) => {
      console.log('New author created', data);
    });
    this.newAuthor = {name: ''};
    this.goHome();
  }

  goHome() {
  this.router.navigate(['/home']);
  }
}
