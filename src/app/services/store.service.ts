import { Injectable } from '@angular/core';
import { Product } from '../Models/prodcut.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private MyShopingCart:Product[]=[];
  private MyCart = new BehaviorSubject<Product[]>([]) ;

  MyCart$ = this.MyCart.asObservable();

  constructor(
  ) { }

  addProduct(product: Product){
    this.MyShopingCart.push(product);
    this.MyCart.next(this.MyShopingCart);
  }
  getTotol(){
    return  this.MyShopingCart.reduce((sum,item) => sum + item.price,0)
  }
  getShopingCart (){
    return this.MyShopingCart;
  }
}
