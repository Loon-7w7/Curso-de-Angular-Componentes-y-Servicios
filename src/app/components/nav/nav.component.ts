import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token ='';
  profile: User | null = null;
  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      products =>{
        this.counter = products.length;
      }
    );
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
  loginUser(): void {
    this.authService.login('loon@mail.com','123456')
      .subscribe((res) => {
        this.token = res.access_token;
        this.getProfile();
      });
  }
  getProfile() {
    this.authService.profile(this.token)
    .subscribe(perfil =>{
      this.profile = perfil
    })
  }
}
