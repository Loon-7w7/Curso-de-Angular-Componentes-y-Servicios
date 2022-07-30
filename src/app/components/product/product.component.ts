import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import{ Producto }from '../../Models/prodcut.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: Producto={
    id: 0,
    title: '',
    price: 0,
    image: '',
    descripttion: '',
    category: '',
  };
  @Output() addProduct = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }
  OnAddToCart(): void {
    this.addProduct.emit(this.product);
  }

}
