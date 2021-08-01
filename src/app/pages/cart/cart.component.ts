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
  ) { 
    this.calculate();
  }
  
  productss = this.cartService.getItems();

  subTotal:any =0;
  shipping:any = 20;
  Total:any =0;

  ngOnInit(): void {
    
  }

  calculate(){
    this.subTotal=0;
    this.Total=0;
    for( let product of this.productss){
      this.subTotal+= (product.price * product.quantity);
     
    }
     this.Total+= this.subTotal;
     this.Total += this.shipping;
  }


  onKey(event: any, item: Product) { // without type info
    for( let product of this.productss){
      if(product.id==item.id){
        product.quantity = event.target.value;
      }
    }
    this.calculate();
  }

  onTrash(toTrash: Product){
    this.productss.forEach( (item, index) => {
      if(item === toTrash) this.productss.splice(index,1);
    });
    this.calculate();

  }
  

}
