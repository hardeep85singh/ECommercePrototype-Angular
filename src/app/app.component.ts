import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        '1',
        'Shoes',
        '/assets/images/products/black-shoes.jpg',
        'Black Running Shoes',
        ['Men', 'Shoes', 'Running Shoes'],
        'MYSHOES',
        109.99),
      new Product(
        '2',
        'Jacket',
        '/assets/images/products/blue-jacket.jpg',
        'Blue Jacket',
        ['Women', 'Apparel', 'Jackets & Vests'],
        'NEATOJACKET',
        238.99),
      new Product(
        '3',
        'Hat',
        '/assets/images/products/black-hat.jpg',
        'A Nice Black Hat',
        ['Men', 'Accessories', 'Hats'],
        'NICEHAT',
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
