import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { Product } from '../product';

@Component(
{
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  encapsulation : ViewEncapsulation.Emulated,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit , OnChanges
{



  @Input() product : Product | undefined;
  @Output() bought = new EventEmitter();

  get productName() : string | undefined
  {
    console.log(`get ${this.product?.name}`);
    return this.product?.name;
  }


  ngOnInit(): void
  {
      console.log(`Name is ${this.product?.name ?? "Not set yet!"} in the ngOnInit`);

  }
  ngOnChanges(changes: SimpleChanges): void
  {
    const product = changes[`product`];
    if(!product.isFirstChange())
    {
      const oldProduct = product.previousValue.name;
      const newProduct = product.currentValue.name;
      console.log(`Product changed from ${oldProduct} to new ${newProduct}`);
    }
  }




  buy()
  {
    this.bought.emit();

  }

}
