import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }
  
  products = this.cartService.getItems();

  subTotal:any =0;
  shipping:any = 20;
  Total:any =0;

  ngOnInit(): void {
    this.calculate()
  }

  calculate(){
    this.subTotal=0;
    this.Total=0;
    for( let product of this.products){
      this.subTotal+= (product.price * product.quantity);
     
    }
     this.Total+= this.subTotal;
     this.Total += this.shipping;
  }
  onKey(event: any, item: Product) { // without type info
    for( let product of this.products){
      if(product.id==item.id){
        product.quantity = event.target.value;
      }
    }
    this.calculate();

  }
  onTrash(toTrash: Product){
    this.products.forEach( (item, index) => {
      if(item === toTrash) this.products.splice(index,1);
    });
    this.calculate();

  }
  

}
