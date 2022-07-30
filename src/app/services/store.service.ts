import { Injectable } from '@angular/core';
import { Producto } from '../Models/prodcut.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private MyShopingCart:Producto[]=[];
  private MyCart = new BehaviorSubject<Producto[]>([]) ;

  MyCart$ = this.MyCart.asObservable();

  constructor(
  ) { }

  addProduct(product: Producto){
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
