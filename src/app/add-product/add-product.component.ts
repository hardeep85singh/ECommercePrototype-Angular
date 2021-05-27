import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  // product: Product = new Product;
  errorMessage: String = '';

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      brand: [''],
      price: ['']
    });
  }

  onSubmit() {

    this.productService.addProduct(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.errorMessage = error.error.message;
        }
      );
  }

}


