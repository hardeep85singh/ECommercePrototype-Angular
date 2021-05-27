
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  product: Product = new Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {    
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  async searchProducts(searchProduct: HTMLInputElement){
    console.log(searchProduct.value);
    this.productService.searchProduct(searchProduct.value).subscribe(
      response => this.products
    );
    
  }
}
