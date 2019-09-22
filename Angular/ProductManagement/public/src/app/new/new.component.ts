import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: object;
  products: object;

  constructor(
    private httpService: HttpService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.newProduct = {name: '', price: '', imgurl: ''};
  }

  getProductsFromService() {
    const observable = this.httpService.getProducts();
    observable.subscribe((data: object[]) => {
      console.log('Got our products', data);
      this.products = data;
    });
  }

  onCreate() {
    const observable = this.httpService.createProduct(this.newProduct);
    observable.subscribe((data: object) => {
      console.log('Created new product', data);
    });
    this.newProduct = { name: '', price: '', imgurl: '' };
    this.getProductsFromService();
    this.gotoProducts();
  }

  gotoProducts() {
    this.router.navigate(['/products']);
  }

}
