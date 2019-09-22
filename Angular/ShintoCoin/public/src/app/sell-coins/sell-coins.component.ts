import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {
  coins: number;
  value: number;
  amount: number;
  message: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getData();
    this.amount = null;
    this.message = '';
  }

  getData() {
    this.coins = this._httpService.coins;
    this.value = this._httpService.value;
  }

  onSell() {
    if (this.amount > this.coins) {
      this.message = 'You don\'t have enough ShintoCoin!';
    } else if (this.amount === null) {
      this.message = 'Please enter an amount';
    } else {
      this.message = `You sold ${this.amount} ShintoCoin!`;
      this._httpService.sell(this.amount);
      this.getData();
    }
    this.amount = null;
  }
}
