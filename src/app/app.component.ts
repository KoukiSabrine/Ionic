import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChaussuresPage } from '../pages/chaussures/chaussures';
import { AccessoiresPage } from '../pages/accessoires/accessoires';
import { CartPage } from '../pages/cart/cart';
import { ContactPage } from '../pages/contact/contact';
import{ LoginPage } from '../pages/login/login'
import { IonicStorageModule } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pages2: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    ,public modal:ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Vétements', component: ListPage },
      { title: 'Chaussures', component: ChaussuresPage },
      { title: 'Accessoires', component: AccessoiresPage }
      
   
      
    ];
    this.pages2=[
      { title: 'Contact', component: ContactPage }
    ];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openCart():void{
    this.modal.create(CartPage).present();
  }
  contacter(){
    this.modal.create(ContactPage).present();
  }

  openLogin(){
    let modal = this.modal.create(LoginPage);
    modal.present();
  }
  
}
