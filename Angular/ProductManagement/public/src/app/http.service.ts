import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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
}
