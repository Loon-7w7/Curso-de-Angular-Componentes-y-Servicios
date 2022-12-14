import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/prodcut.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

  onLoadMore() {
    this.productsService.getAllProducts(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
