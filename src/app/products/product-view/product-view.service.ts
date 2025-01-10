import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable , of , switchMap ,mergeMap} from 'rxjs';

@Injectable()
export class ProductViewService {

  private product : Product | undefined;
  constructor(private productService : ProductsService) { }

  getProduct(id : number) : Product | undefined
  {
      const products = this.productService.getProducts();

      console.log(`Currently in product-view service inscp ${JSON.stringify(products)}`);


      if(!this.product)
      {
          this.product = products[id];
          console.log(`Getting product ${this.product} with id ${id}`);

      }

      return this.product;

  }

  getProductObservable(id: number): Observable<Product> {
    return this.productService.getProductsObservable().pipe(
      mergeMap(products => {
        if (!this.product) {
          this.product = products[id];
        }
        return of(this.product);
      })
    );
  }


}
