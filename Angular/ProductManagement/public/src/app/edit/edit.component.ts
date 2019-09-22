import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { HttpService} from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productID: any;
  product: object;
  editProduct: any;
  messages: string[];

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router

    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Product ID:', params.id);
      this.productID = params.id;
      this.editProduct = {name: '', price: '', imgurl: ''};
      this.getProduct();
    });
    this.messages = [];
  }

  getProduct() {
    const observable = this.httpService.getProduct(this.productID);
    observable.subscribe((data: object) => {
      console.log('Got 1 cake by ID', data);
      this.product = data;
    });
  }

  onUpdate() {
    this.messages = [];
    if (this.editProduct.name.length < 5) {
      this.messages.push('Name must be at least 4 characters');
    } else if (this.editProduct.name === '') {
      this.messages.push('Name is required');
    } else if (this.editProduct.price === '') {
      this.messages.push('Price is required');
    } else {
      const observable = this.httpService.updateProduct(this.productID, this.editProduct);
      observable.subscribe((data: object) => {
        console.log('Edited product', data);
      });
      this.editProduct = { name: '', price: '', imgurl: '' };
      this.gotoProducts();
    }
  }

  onDelete(id: string) {
    const observable = this.httpService.deleteProduct(id);
    observable.subscribe((data: object) => {
      console.log('Deleted product', data);
      this.gotoProducts();
    });
  }

  gotoProducts() {
    this.router.navigate(['/products'], {
      queryParams: { refresh: new Date().getTime() }
    });
  }
}
