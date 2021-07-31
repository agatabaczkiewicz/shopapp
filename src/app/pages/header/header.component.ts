import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartCounter: any;

//  cartCounter:any;
  constructor(private cartService: CartService) { 
    // this.cartCounter$ = this.cartService.cartCount$
    // this.cartCounter = this.cartService.cartCount$.subscribe(
    //   count => {
    //     // this runs everytime the count changes
    //     this.cartCounter = count;
    //   }
    // )
  }

  
  ngOnInit(): void {

  }
  ngOnDestroy() {
    // this.cartCounter.unsubscribe(); // important to unsubscribe
  }

}
