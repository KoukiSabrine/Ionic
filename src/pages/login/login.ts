import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';
import {Validators,FormBuilder,FormGroup} from'@angular/forms';
import {Storage} from '@ionic/storage';
import {User} from '../../modeles/user'
import { HomePage } from '../home/home';
@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
loginForm:FormGroup;
user:User={username:'',password:''};
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,
    private formBuilder:FormBuilder,private storage:Storage     ) {
      this.loginForm=this.formBuilder.group({
        username:['',Validators.required],
        password:['',Validators.required],
        remember:true
      });
      storage.get('user').then(user=>{
        if (user) { // if user is available
          console.log(user);
          this.user = user;
          this.loginForm
            .patchValue({                   //set up the new user and psswd
              'username': this.user.username,  
              'password': this.user.password 
            });
        }
        else
          console.log('user not defined');
      });


      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['',Validators.required],
        remember: true
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.loginForm.value, this.user);
    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    console.log(this.user);
    if(this.loginForm.get('remember').value)
      this.storage.set('user', this.user)
    else
      this.storage.remove('user');
    this.viewCtrl.dismiss();
  }
goo():void{
this.navCtrl.push(HomePage);
}
}
