import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: object[];

  constructor(private httpService: HttpService) {
    this.getProductsFromService();
  }

  ngOnInit() {
  }

  getProductsFromService() {
    const observable = this.httpService.getProducts();
    observable.subscribe((data: object[]) => {
      console.log('Got our products', data);
      this.products = data;
    });
  }

  onDelete(id: string) {
    console.log('ID: ', id);
    const observable = this.httpService.deleteProduct(id);
    observable.subscribe((data: object) => {
      console.log('Deleted product', data);
      this.getProductsFromService();
    });
  }
}
