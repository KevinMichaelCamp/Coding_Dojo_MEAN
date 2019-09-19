import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: object;
  editAuthor: object;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.editAuthor = {name: ''};
    this.route.params.subscribe((params: Params) => {
      console.log("Params ID: ", params['id']);
      this.getAuthorFromService(params['id']);
    })
  }

  getAuthorFromService(id: string) {
    const observable = this.httpService.getAuthor(id);
    observable.subscribe((data: object) => {
      console.log('Got 1 author by ID', data);
      this.author = data;
    });
  }

  onUpdate(id: string) {
    const observable = this.httpService.updateAuthor(id, this.editAuthor);
    observable.subscribe((data: object) => {
      console.log('Updated author', data);
    });
    this.editAuthor = {name: ''};
    this.goHome();
  }

  goHome() {
  this.router.navigate(['/home']);
  }
}
