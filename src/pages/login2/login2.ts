import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignInPage } from '../sign-in/sign-in';



@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');
  }
  signup(){
    this.navCtrl.push(LoginPage);
  }

  signIn(){
    this.navCtrl.push(SignInPage);
  }

}
