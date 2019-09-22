import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})

export class BuyCoinsComponent implements OnInit {
  value: number;
  coins: number;
  amount: number;
  message: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    this.amount = null;
    this.message = '';
  }

  getData() {
    this.value = this._httpService.value;
    this.coins = this._httpService.coins;
  }

  onBuy() {
    if (this.amount < 0) {
      this.message = 'Amount must be greater than zero';
    } else if (this.amount === null) {
      this.message = 'Please enter an amount';
    } else {
      this.message = `You bought ${this.amount} ShintoCoins!`;
      this._httpService.buy(this.amount);
      this.getData();
    }
    this.amount = null;
  }
}
