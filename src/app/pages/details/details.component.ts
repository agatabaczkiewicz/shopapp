import { Component, OnInit, Input  } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../product.service';
import { CartService } from 'src/app/cart.service';
import { Iproducts } from 'src/app/data/iproducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Iproducts | undefined;
  productCard: Product = { id: 0,
    name: "",
    price: 0,
    quantity: 0};
  c =1;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProductInfo()
  }

  getProductInfo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
    this.productCard = { id: this.product?.id as number,
      name: this.product?.name as string,
      price: this.product?.price as number,
      quantity: 0}
  }

  addToCart(product: Product) {
    product.quantity=this.c;
    this.cartService.addToCart(product);
    this.toastr.success('Added to cart');
    // this.c+=this.c;
    // this.cartService.setCartCount(this.c);
    
    // window.alert('Your product has been added to the cart!');
  }

  onQuntityChange(event: any) { // without type info
     this.c=event.target.value;
    
  }
  

}
