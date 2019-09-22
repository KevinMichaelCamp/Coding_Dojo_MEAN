import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mine_coins', component: MineCoinsComponent },
  { path: 'buy_coins', component: BuyCoinsComponent },
  { path: 'sell_coins', component: SellCoinsComponent },
  { path: 'ledger', component: BrowseLedgerComponent },
  { path: 'transaction/:id', component: TransactionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
