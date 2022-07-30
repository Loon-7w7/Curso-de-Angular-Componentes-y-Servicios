import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/prodcut.module';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  MyShopingCart:Producto[]=[];
  Total:number = 0;

  products:Producto[]= [
    {
      id: 1,
      name: 'EL mejor juguete',
      precio: 565,
      image: '../../../assets/Mejores-Juguetes.jpg'
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      precio: 356,
      image: '../../../assets/mkz-bicialuminioama.jpg'
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      precio: 34,
      image: '../../../assets/RUD4ZM45YZG27LO57HUVGQ6CRM.jpg'
    },
    {
      id: 4,
      name: 'Mis libros',
      precio: 23,
      image: '../../../assets/2015-01-19-los-nuevos-habitantes.jpg'
    },
    {
      id: 5,
      name: 'Casita michi',
      precio: 125,
      image: '../../../assets/camas-gato-modulares.jpg'
    },
    {
      id: 6,
      name: 'Lentes vintage',
      precio: 82,
      image: '../../../assets/descargar.jpg'
    },
  ];

  constructor(
    private storService: StoreService
  ) {
    this,this.MyShopingCart = this.storService.getShopingCart();
  }

  ngOnInit(): void {
  }
  OnAddToShopingCart(product: Producto): void {
    this.storService.addProduct(product);
    this.Total = this.storService.getTotol();
  }

}
