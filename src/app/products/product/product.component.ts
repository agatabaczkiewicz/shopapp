import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
//import { Product } from 'src/app/product';
import { Iproducts } from 'src/app/data/iproducts';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Iproducts[] = [];
  selectedProduct?: Iproducts;
  cart: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private restService: RestService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getProductsFromServer();
  }

  // ngOnChanges():void {
  //   this.getProducts();
  // }

getProducts(): void {
  this.products = this.productService.getProducts();
  // this.productService.getProducts();
}

getProductsFromServer() {
  this.restService.getProductsRequest()
    .subscribe(
      response => {
        if (response != null) {
          console.log(response);
          this.products = response;
          this.productService.saveProductsFromResponse(response);
        }
        else {
          this.toastr.error('Wrong');
        }
      },
      (error) => {              //Error callback
        this.toastr.error('Wrong data!');

      }
    )
// this.getProducts();
    }
    
}
