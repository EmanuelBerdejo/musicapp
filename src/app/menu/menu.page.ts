import { Component, OnInit } from '@angular/core';
import{MenuController, NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCrtl: NavController,
    private storage: Storage
    ) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.storage.set("isUserLoggedIn", false);
    this.navCrtl.navigateRoot('/login');
  }

  goIntro(){
    this.navCrtl.navigateForward('/intro');
  }

}
