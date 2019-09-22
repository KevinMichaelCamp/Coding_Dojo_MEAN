import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  products: object[];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/product');
  }

  getProduct(id: string) {
    return this.http.get(`/product/${id}`);
  }

  createProduct(newProduct: object) {
    return this.http.post('/product', newProduct);
  }

  updateProduct(id: string, editProduct: object) {
    return this.http.put(`/product/${id}`, editProduct);
  }

  deleteProduct(id: string) {
    return this.http.delete(`/product/${id}`);
  }

  getAllProducts() {
    const observable = this.getProducts();
    observable.subscribe((data: object[]) => {
      this.products = data;
      console.log('service', this.products);
    });
  }

}
