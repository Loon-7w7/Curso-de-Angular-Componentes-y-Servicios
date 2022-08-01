import { Component } from '@angular/core';
import { Product } from './Models/prodcut.model';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import{CreateUserDTO, User}from './Models/user.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imageParent = '';
    imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private usersService: UsersService,
    private auth:AuthService
  ) {

  }
    onload(image:string){
      console.log('logPadre',image);
    }
    toggleImg() {
      this.showImg = !this.showImg;
    }
    createUser() {
      this.usersService.create({
        name: 'Loom',
        email: 'loon@mail.com',
        password: '123456'
      })
      .subscribe(rta => {
        console.log(rta);
      });
    }

}
