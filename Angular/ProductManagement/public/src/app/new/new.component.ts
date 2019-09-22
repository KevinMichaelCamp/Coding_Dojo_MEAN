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
  messages: string[];

  constructor(
    private httpService: HttpService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.newProduct = {name: '', price: '', imgurl: ''};
    this.messages = [];
  }

  getProductsFromService() {
    const observable = this.httpService.getProducts();
    observable.subscribe((data: object[]) => {
      console.log('Got our products', data);
      this.products = data;
    });
  }

  onCreate() {
    this.messages = [];
    const observable = this.httpService.createProduct(this.newProduct);
    observable.subscribe((data: any) => {
      if (data.errors) {
        this.messages.push(data.errors.name.message);
        this.messages.push(data.errors.price.message);
      } else {
        console.log('Created new product', data);
        this.gotoProducts();
      }
    });
    this.newProduct = { name: '', price: '', imgurl: '' };
  }

  gotoProducts() {
    this.router.navigate(['/products'], {
      queryParams: { refresh: new Date().getTime() }
    });
  }

}
