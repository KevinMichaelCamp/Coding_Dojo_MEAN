import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transID: any;
  trans: object;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.transID = (params.id - 1);
    });
    this.getTransData();
  }

  getTransData() {
    this.trans = this._httpService.ledger[this.transID];
  }
}
