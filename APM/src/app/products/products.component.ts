import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  title = 'Product List';
  imgWidth = 50;
  imgMargin = 2;
  showImage = false;
  filteredProducts: Product[];
  products: Product[];
  private _subscribeHolder = new Subscription();

  private _filter: string;


  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.filter ? this.getFilteredProducts(this.filter) : this.products;
  }

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._subscribeHolder.add(
      this._productService.getProducts().subscribe(
        value => {
          this.products = value;
          this.filteredProducts = this.products;
        })
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private getFilteredProducts(filter: string) {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  onNotify($event) {
    console.log($event);
  }

  ngOnDestroy(): void {
    this._subscribeHolder.unsubscribe();
  }
}
