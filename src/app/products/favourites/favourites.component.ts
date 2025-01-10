import { Component, Host, Optional,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit
{
  products: Product[] = []

  constructor(@Host() @Optional() private productService : ProductsService)
  {

  }
  ngOnInit(): void
  {
      this.products = this.productService.getProducts();
  }
}
