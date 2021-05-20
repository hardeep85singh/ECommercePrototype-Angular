import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-price',
  template: `
  <div class="price-display">Rs {{price}} </div>
  `,
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
