import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: object[];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.getProductsFromService();
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.getProductsFromService();
      }
    });
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
