import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]
  {
      return [
        {
        name: 'Webcam',
        price: 100
      },
      {
        name:  'Microphone',
        price: 200
      },
      {
        name: 'Wireless keyboard',
        price: 85
      }
    ];
  }

  getProductsObservable() : Observable<Product[]>
  {
      return of(this.getProducts());
  }
}
