import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private productSubject: BehaviorSubject<Product>;
  public product: Observable<Product> = new Observable;

  constructor(
    private httpClient: HttpClient
  ) { 
    // this.productSubject = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('product')!));
    //     this.product = this.productSubject.asObservable();
  }

  searchProduct(searchProduct: String){
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/${searchProduct}`,
    httpOptions);
  }

  addProduct(product : Product){
    return this.httpClient.post<Product>(`${environment.apiUrl}/product`, 
    product, httpOptions);
  }

}
