import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastOptions, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { login } from '../../modeles/interface-login';
import { User } from '../../modeles/user';
import { ContactPage } from '../contact/contact';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  loginForm:FormGroup;
user:User={username:'',password:''};
u:User[];
//u:User;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,private formBuilder:FormBuilder,private viewCtrl:ViewController) {
    //this.u=this.navParams.get("data");


   this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      remember:true
    });
    storage.get('user').then(user=>{
      if ( user) { // if user is available
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
 /*auth(user:User):void{
    let added:boolean=false;
    this.storage.get("user").then((data:User[])=>{

      for(let i=0;i< data.length;i++){
        const element:User=data[i];
        if(this.u.password===element.password){
           
         
          this.navCtrl.push(ContactPage);*/


         /* this.storage.set("user",data)
            .then(data=>{
            let options:ToastOptions={
                         message: "Votre base a été mis à jour", 
                        duration: 2000,
                        showCloseButton: true,
                        closeButtonText: "Fermer",
        
           } ;
   
      })
      .catch(err=>{
        console.log("Erreur",err)
      })
   
        }
        
        else{
          console.log('invalide');
          this.navCtrl.push(SignInPage);

        }
      }

    })

    
  }*/
  
  goo():void{
    this.navCtrl.push(ContactPage);
    }
}
