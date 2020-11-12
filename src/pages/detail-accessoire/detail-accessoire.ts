import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ToastOptions, Events } from 'ionic-angular';
import { MethodProvider } from '../../providers/method/method';
import { product } from '../../modeles/interface-products';
import { itemCart } from '../../modeles/interface-itemCart';
import { CartPage } from '../cart/cart';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-detail-accessoire',
  templateUrl: 'detail-accessoire.html',
})
export class DetailAccessoirePage {
  ProductDetail:product;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage,
    public toast:ToastController,public modal:ModalController,public method:MethodProvider,
    public event:Events) {
      this.ProductDetail=this.navParams.get("data");
      this.event.subscribe('star-rating:changed',(note)=>{
        console.log('Voici la note choisie',note)
              })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAccessoirePage');
  }

  addToCart(ProductDetail:product):void{
    let added:Boolean=false;
    //si le panier est vide
    this.storage.get("Cart").then((data:itemCart[])=>{
      if(data===null || data.length===0){
        data=[];
        data.push({
          item:ProductDetail,
          qty:1,
          amount:ProductDetail.price
        })
      }
      else{
          //si le panier n'est pas vide
          for(let i=0;i< data.length;i++){
            const element:itemCart=data[i];
            if(ProductDetail.id===element.item.id){
               //le panier n'est pas vide et  contient  d'articles
              //il y a au moins un article qui existe déja
              element.qty += 1;
              element.amount += ProductDetail.price;
              added=true;
            }
          }
          if(!added){
            //le panier n'est pas vide et ne contient pas d'articles
            data.push({
              item:ProductDetail,
              qty:1,
              amount:ProductDetail.price
            })
    
    
          }
    
      }
      this.storage.set("Cart",data)
      .then(data=>{
    let options:ToastOptions={
      message: "Votre panier a été mis à jour", 
        duration: 2000,
        showCloseButton: true,
        closeButtonText: "Fermer",
        
    } ;
    this.toast.create(options).present();
      })
      .catch(err=>{
        console.log("Erreur",err)
      })
    })
    
    
      }

  openCart():void{
        this.modal.create(CartPage).present();
      }

  showImage(picture:any,event):void{
      return this.method.showImage(picture,event)
    
      }  
  noter(ProductDetail:product):void{
    this.storage.get("ProductDetail.averageStar");
    console.log('gggggg');
  }  
  
}
