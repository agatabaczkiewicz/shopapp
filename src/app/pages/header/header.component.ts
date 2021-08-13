import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCounter: any;
  isLoggedIn = false;
  username?: string;
  // items: Product[] =[];
  c = 0;
//  cartCounter:any;
  constructor(private cartService: CartService,
    private tokenStorageService: TokenStorageService) { 
    // this.cartCounter$ = this.cartService.cartCount$
    // this.cartCounter = this.cartService.cartCount$.subscribe(
    //   count => {
    //     // this runs everytime the count changes
    //     this.cartCounter = count;
    //   }
    // )
  }
  // updateCartCount(){
  //   this.items = this.cartService.getItems;
  //   if(this.items.length)
  //   for(let item of this.items){
  //     this.c+=item.quantity;
  //   }

  // }
  
  ngOnInit(): void {
    // this.updateCartCount()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user;
      console.log(this.username)
      
    }
  }
    
  ngOnDestroy() {
    // this.cartCounter.unsubscribe(); // important to unsubscribe
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
