import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/prodcut.module';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  MyShopingCart:Product[]=[];
  Total:number = 0;

  products:Product[]= [];

  constructor(
    private storService: StoreService,
    private productService: ProductsService
  ) {
    this,this.MyShopingCart = this.storService.getShopingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    })
  }
  OnAddToShopingCart(product: Product): void {
    this.storService.addProduct(product);
    this.Total = this.storService.getTotol();
  }

}
