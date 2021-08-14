import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';
//import { PRODUCTS } from 'src/app/mocks/mock-product';
import { Observable, of } from 'rxjs';
import { Iproducts } from './data/iproducts';


//const  PRODUCTS: Product[] = [
 // { id: 11, name: 'Dr Nice', price: 40, quantity:0 }];


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCTS: Product[] = [
    { id: 19, name: 'Magma', price: 40,quantity:0 },
  { id: 20, name: 'Tornado', price: 40,quantity:0 }
];

IPRODUCTS: Iproducts[] = [
//   { id: 19, name: 'Magma', price: 40,description: 'XD', image: 'x' },
// {id: 20, name: 'Magma', price: 40,description: 'XD', image: 'x' }
];

  constructor() { }


getProducts(): Iproducts[] {
  console.log(this.IPRODUCTS + 'XDDDDDDDDDDDDDddd')
  return this.IPRODUCTS;
}


getProduct(id: number): Observable<Iproducts> {
  const product = this.IPRODUCTS.find(p => p.id === id)!;
  return of(product);
}

public saveProductsFromResponse(products: Iproducts[]): void {
  this.IPRODUCTS = products;

}
}
