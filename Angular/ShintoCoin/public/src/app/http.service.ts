import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coins: number;
  value: number;
  ledger: object[];
  actionID: number;

  constructor(private http: HttpClient) {
    this.coins = 0;
    this.value = 1;
    this.ledger = [];
    this.actionID = 1;
  }

  mine() {
    const action = {
      id: this.actionID,
      action: 'Mined',
      amount: 1,
      value: this.value
    };
    this.ledger.push(action);
    this.value++;
    this.coins++;
    this.actionID++;
  }

  buy(amt: number) {
    const action = {
      id: this.actionID,
      action: 'Bought',
      amount: amt,
      value: this.value
    };
    this.ledger.push(action);
    this.value++;
    this.coins += amt;
    this.actionID++;
  }

  sell(amt: number) {
    const action = {
      id: this.actionID,
      action: 'Sold',
      amount: amt,
      value: this.value
    };
    this.ledger.push(action);
    this.value--;
    this.coins -= amt;
    this.actionID++;
  }
}
