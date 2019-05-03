import { NgModule } from '@angular/core';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ConvertToSpacePipePipe} from '../shared/convert-to-space-pipe.pipe';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail/product-detail.guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ConvertToSpacePipePipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
    ])
  ]
})
export class ProductModule { }
