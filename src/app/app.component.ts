import { Component } from '@angular/core';
import { Product } from './Models/prodcut.model';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  imgRta = '';

  constructor(
    private usersService: UsersService,
    private filesService:FilesService
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

    downloadPdf() {
      this.filesService.getFile ('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
      .subscribe()
    }

    onUpload(event: Event) {
      const element = event.target as HTMLInputElement;
      const file = element.files?.item(0);
      if (file) {
        this.filesService.uploadFile(file)
        .subscribe(rta => {
          this.imgRta = rta.location;
        });
      }

    }
  }
