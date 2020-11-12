import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { product, Availability } from '../../modeles/interface-products';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker';



@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
myProduct:product;
categories=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public imagePicker:ImagePicker) {
    this.myProduct={} as product;
    this.myProduct.availability={} as Availability;
    this.myProduct.pictures=[];
    this.categories=[
      {
        title:'Vétements'
      },
      {
        title:'Chaussures'
      },
      {
        title:'Accessoires'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }

  create(myProduct:product){
myProduct.id='5';
myProduct.createdAt=new Date();
myProduct.availability.available=true;

    console.log('myProduct = ',myProduct);
  }
  pickImages(){
    let options:ImagePickerOptions ={
      maximumImagesCount:4,
      outputType :OutputType.FILE_URL
    }
this.imagePicker.getPictures(options)
.then((results)=>{
  console.log('Images=',results);
  this.myProduct.pictures=results ;
})
.catch((error)=>{
console.log('Erreur',error);
})
  }
}
