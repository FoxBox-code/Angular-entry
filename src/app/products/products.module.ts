import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from "./product/product.component";
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { PermissionsDirective } from './permissions.directive';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    SortPipe,
    ProductHostDirective,
    PermissionsDirective
  ],
  imports: [
    CommonModule,
    ProductComponent
],
  exports: [ProductListComponent]
})
export class ProductsModule {}

