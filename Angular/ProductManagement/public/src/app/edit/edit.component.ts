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
  editProduct: object;

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
  }

  getProduct() {
    const observable = this.httpService.getProduct(this.productID);
    observable.subscribe((data: object) => {
      console.log('Got 1 cake by ID', data);
      this.product = data;
    });
  }

  onUpdate() {
    const observable = this.httpService.updateProduct(this.productID, this.editProduct);
    observable.subscribe((data: object) => {
      console.log('Edited product', data);
    });
    this.editProduct = { name: '', price: '', imgurl: '' };
    this.gotoProducts();
  }

  onDelete(id: string) {
    const observable = this.httpService.deleteProduct(id);
    observable.subscribe((data: object) => {
      console.log('Deleted product', data);
      this.gotoProducts();
    });
  }

  gotoProducts() {
    this.router.navigate(['/products']);
  }
}
