import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import{ Producto }from '../../Models/prodcut.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {


  @Input() product: Producto={
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
  };
  @Output() addProduct = new EventEmitter<Producto>();

  constructor() { }


  OnAddToCart(): void {
    this.addProduct.emit(this.product);
  }

}
