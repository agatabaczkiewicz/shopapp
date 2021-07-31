import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Product } from './product';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './pages/header/header.component';
import { PRODUCTS } from './mocks/mock-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  
  private cartCount = new ReplaySubject<number>(1);
  cartCount$ = this.cartCount.asObservable();
  
  setCartCount(count: number) {
    // encapsulate with logic to set local storage
    // localStorage.setItem("cart_count", JSON.stringify(count));
    this.cartCount.next(count);
  }

  items: Product[] = [];
/* . . . */

 

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    // this.count = 0;
    return this.items;
  }
  
  addToCart(product: Product) {
  
    this.items.push(product);
    // return this.count;
  }
 
 
  // getCounter(): Observable<Number> {
  //   // return of(cartCounter);
  // }
}
