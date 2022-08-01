import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import{ Product }from '../../Models/prodcut.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {


  @Input() product: Product={
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: '',
    },
  };
  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }


  OnAddToCart(): void {
    this.addProduct.emit(this.product);
  }

}
