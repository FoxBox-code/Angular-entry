import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription , Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy
{

  selectedProduct : Product |undefined
  products: Product[] = [];
  private productService : ProductsService;
  private productSub : Subscription | undefined;
  private productSubSubject = new Subject<void>;

  constructor()
  {
     this.productService = new ProductsService();
  }

  onBuy()
  {
    window.alert(`You just bought ${this.selectedProduct?.name}!`)

  }

  @ViewChild(ProductDetailsComponent) productDetails : ProductDetailsComponent | undefined;

  ngAfterViewInit(): void
  {
      if(this.productDetails)
      {
        console.log(`After view init log${this.productDetails.product}`);

      }
  }
  ngOnInit(): void
  {
        this.products = this.productService.getProducts();

        this.getProductsFromObesrable();//THIS ONE WORKS WITH OBSERVABLES
  }

  ngOnDestroy(): void
  {
      this.productSub?.unsubscribe();//Better way of unsubscribing is to use Subject

      // this.productSubSubject.next();
      // this.productSubSubject.complete(); Both of these is to close out the subject
      //NOTE TEXTBOOK says the best way to unsubscribe is to use async pipe
  }

  trackByProducts(index : number , product : Product) : string
  {
      return product.name;
  }
  private getProductsFromObesrable()
  {
      this.productSub = this.productService.getProductsObservable().subscribe(products => {
        this.products = products;
      })

      // this.productviewService.getProduct(this.id).pipe(
      //   takeUntil(this.productSub)
      // ).subscribe(product => {
      //   if (product) {
      //     this.name = product.name;
      //   }
      // }); unsubscribing using Subject and TakeUntil
  }

}
