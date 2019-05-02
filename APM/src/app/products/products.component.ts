import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'Product List';
  imgWidth = 50;
  imgMargin = 2;
  showImage = false;
  filteredProducts: Product[];
  products: Product[];

  private _filter: string;


  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.filter ? this.getFilteredProducts(this.filter) : this.products;
  }

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
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
}
