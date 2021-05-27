import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = [];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product | undefined;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.description === this.currentProduct.description;
  }

}
