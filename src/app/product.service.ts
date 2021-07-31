import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';
import { PRODUCTS } from 'src/app/mocks/mock-product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


getProducts(): Product[] {
  return PRODUCTS;
}


getProduct(id: number): Observable<Product> {
  const product = PRODUCTS.find(p => p.id === id)!;
  return of(product);
}
}
