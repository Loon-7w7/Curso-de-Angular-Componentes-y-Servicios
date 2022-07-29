import { Component } from '@angular/core';
import { Producto } from './Models/prodcut.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imageParent = '';
    imgParent = '';
  showImg = true;
  title = 'Hola';

    onload(image:string){
      console.log('logPadre',image);
    }
    toggleImg() {
      this.showImg = !this.showImg;
    }
}
