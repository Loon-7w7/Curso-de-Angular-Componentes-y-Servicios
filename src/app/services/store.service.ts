import { Injectable } from '@angular/core';
import { Producto } from '../Models/prodcut.module';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private MyShopingCart:Producto[]=[];


  constructor() { }

  addProduct(product: Producto){
    this.MyShopingCart.push(product);
  }
  getTotol(){
    return  this.MyShopingCart.reduce((sum,item) => sum + item.precio,0)
  }
  getShopingCart (){
    return this.MyShopingCart;
  }
}
