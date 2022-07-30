import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Producto } from '../Models/prodcut.module';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Producto[]>("https://fakestoreapi.com/products");
  }
}
