import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  products: object[];

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get('/product');
  }

  getProduct(id: string) {
    return this._http.get(`/product/${id}`);
  }

  createProduct(newProduct: object) {
    return this._http.post('/product', newProduct);
  }

  updateProduct(id: string, editProduct: object) {
    return this._http.put(`/product/${id}`, editProduct);
  }

  deleteProduct(id: string) {
    return this._http.delete(`/product/${id}`);
  }

  getAllProducts() {
    const observable = this.getProducts();
    observable.subscribe((data: object[]) => {
      this.products = data;
      console.log('service', this.products);
    });
  }

}
