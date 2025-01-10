import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from "./product/product.component";
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { PermissionsDirective } from './permissions.directive';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProductViewComponent } from './product-view/product-view.component';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    SortPipe,
    ProductHostDirective,
    PermissionsDirective,
    FavouritesComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
],
  exports: [ProductListComponent]
})
export class ProductsModule {}

