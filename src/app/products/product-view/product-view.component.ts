import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers : [ProductViewService]
})
export class ProductViewComponent implements OnInit
{

  @Input() integer = -1;
  name = "";

  constructor(@Inject(ProductViewService) private productViewService : ProductViewService)
  {

  }

  ngOnInit(): void {
    const product = this.productViewService.getProduct(this.integer);

    if(product)
    {
        this.name = product.name;
    }

    console.log(`this name = ${product}`);

    this.getProductFromObservable();

  }

  private getProductFromObservable(){
    this.productViewService.getProductObservable(this.integer).subscribe(product =>{
      if(product){
        this.name = product.name
      }
    })
  }
}
