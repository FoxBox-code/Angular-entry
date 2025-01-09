import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{

  selectedProduct : Product |undefined
  products: Product[] = [
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

  trackByProducts(index : number , product : Product) : string
  {
      return product.name;
  }


}
