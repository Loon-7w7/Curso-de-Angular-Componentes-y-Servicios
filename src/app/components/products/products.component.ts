import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product,CreateProductDTO,UpdateProductDTO } from 'src/app/Models/prodcut.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {

  myShoppingCart:Product[]=[];
  total:number = 0;
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter();
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  };

  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }



  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.toggleProductDetail();
    this.productService.getProduct(id)
    .subscribe(data => {
      this.productChosen = data;
      this.statusDetail = 'success';
    }, errorMsg => {
      window.alert(errorMsg);
      this.statusDetail = 'error';
    })
  }
  readAndUpdate(id: string) {
    this.productService.getProduct(id)
    .pipe(
      switchMap((product) => this.productService.update(product.id, {title: 'change'})),
    )
    .subscribe(data => {
      console.log(data);
    });
    this.productService.fetchReadAndUpdate(id, {title: 'change'})
    .subscribe(response => {
      const read = response[0];
      const update = response[1];
    })
  }
  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo prodcuto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    }
    this.productService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    });
  }
  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'change title',
    }
    const id = this.productChosen.id;
    this.productService.update(id, changes)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
      this.productChosen = data;
    });
    this.toggleProductDetail()
  }
  deleteProduct() {
    const id = this.productChosen.id;
    this.productService.delete(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }
  onLoadMore() {
    this.loadMore.emit();
  }
}
