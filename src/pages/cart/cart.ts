import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, AlertOptions } from 'ionic-angular';
import { itemCart } from '../../modeles/interface-itemCart';
import { Storage } from '@ionic/storage';
import { product } from '../../modeles/interface-products';
import { MethodProvider } from '../../providers/method/method';
import { ContactPage } from '../contact/contact';
import { Login2Page } from '../login2/login2';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
cartItems:itemCart[];
total:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public storage:Storage
    ,public toast:ToastController,public alertCtrl:AlertController,public method:MethodProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart")
    .then((data:itemCart[])=>{
      this.cartItems=data;
      this.cartItems.forEach((element:itemCart)=>{
        if(element.item.availability.type==="Disponible en Magasin"){
          element.item.availability.feed=0 ;
        }
this.total +=(element.item.price*element.qty)
      })
    })
    .catch(err=>{
      console.log("Erreur",err);
    })
  }

  CloseModal():void{
this.viewCtrl.dismiss()
  }
  removeItem(article:itemCart,index:number):void{
    let options:AlertOptions={
      title:"Attention!",
      subTitle:'Etes-vous sur de vouloir retirer cet article ?',
buttons :[
  {
    text:"annuler",
  role :"concel"
},
{
text :"Retirer",
handler:()=>{
  let price:number=article.item.price;
  let qty:number=article.qty;
  let myTotal:number=qty*price;
  this.cartItems.splice(index,1);
this.storage.set("Cart",this.cartItems)
.then((data)=>{
  this.total -=myTotal;
  this.toast.create({
    message:"Article retiré du panier!",
    duration:2000
  }).present();
})
.catch((error)=>{
  console.log("error",error);
})
}
}
]
    }
    this.alertCtrl.create(options).present();

  }
  showImage(picture:any,event):void{
    //event.stopPropagation();
//this.imageViewer.create(picture).present();
return this.method.showImage(picture,event)

  }
  go(){
    this.navCtrl.push(ContactPage);
  }
  log(){
    this.navCtrl.push(Login2Page);
  }

}
