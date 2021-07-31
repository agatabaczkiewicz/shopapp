import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Product[] = [];
  selectedProduct?: Product;
  cart: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

getProducts(): void {
  this.products = this.productService.getProducts();
}

}
