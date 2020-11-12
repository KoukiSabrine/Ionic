import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HtmlAstPath } from '@angular/compiler';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import { Robe1Page } from '../robe1/robe1';
import { product } from '../../modeles/interface-products';
import { ImageViewerController } from 'ionic-img-viewer';
import { MethodProvider } from '../../providers/method/method';
import { CreateProductPage } from '../create-product/create-product';
import {Data} from './list.service';
import { Login2Page } from '../login2/login2';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
  
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  articles: product[];  //tableau d'objets
  searchTerm : any="";
  jsonData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
   public imageViewer:ImageViewerController,public method:MethodProvider ,public data : Data) {

this.articles=[
{                                   //chaque obj entre{} et le tab entre []
createdAt:new Date(),
title:'Robe',
  description:'Marque de mode pse877 Robe femme Dentelle  Robe De Soirée Vintage Robe robe sexy rétro Vêtements Pour Femmes robe negro Robes De Soirée De Mariage',
  price:144,
  id:'1',
  averageStar:5,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Livraison',
    feed:2,
    
  }
,
pictures:[
  'assets/imgs/robe5.jpg',
  'assets/imgs/robe7.jpg',
  'assets/imgs/robe6.jpg'
]
},
{
  createdAt:new Date(),
  title:'Veste',
  description:'Veste Mi Saison Femme Mauve Décontractée Longue Femme Coupe Vent Printemps',
  price:87,
  id:'2',
  averageStar:4,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Disponible en Magasin',
    feed:2
  
},
pictures:[
  'assets/imgs/veste14.jpg',
  'assets/imgs/veste13.jpg',
  'assets/imgs/veste15.jpg'
]},
{
  createdAt:new Date(),
  title:'Jupe',
  description:'Notre coup de ❤ : Jupe mi-longue volantée !Tendance à suivre.',
  price:69,
  id:'3',
  averageStar:3,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Livraison',
    feed:2
  
},
pictures:[

  'assets/imgs/jupe7.jpg',
  'assets/imgs/jupe5.jpg',
  'assets/imgs/jupe6.jpg'
]},
{
  createdAt:new Date(),
  title:'Pantalon',
  description:'Pantalon taille et bas élastiques poches femme Pantalon. Taille élastique. Cordon de serrage. Poches passepoilées latérales.',
  price:69,
  id:'3',
  averageStar:3,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Livraison',
    feed:2
  
},
pictures:[
  'assets/imgs/pantalon4.jpg',
  'assets/imgs/pantalon5.jpg',
  'assets/imgs/pantalon6.jpg'
]},
{
  createdAt:new Date(),
  title:'Pull',
  description:'Pull manches 3/4 ajouré irisé ,Echancrure à double bride boutons 2 trous au dos',
  price:244,
  id:'5',
  averageStar:3,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Livraison',
    feed:2
  
},
pictures:[
  'assets/imgs/pull5.jpg',
  'assets/imgs/pull6.jpg',
  'assets/imgs/pull7.jpg'
]},
{
  createdAt:new Date(),
  title:'Combinaison',
  description:'Une combinaison-pantalon des plus féminines avec sa taille ceinturée',
  price:99,
  id:'6',
  averageStar:4,
  categorie:'vétements',
  availability:{
    available:true,
    type:'Livraison',
    feed:2
  
},
pictures:[
  'assets/imgs/combinaison5.jpg',
  'assets/imgs/combinaison6.jpg',
  'assets/imgs/combinaison7.jpg'
]},
]

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  showDetails(article:product):void{
this.navCtrl.push(Robe1Page,{data:article});
  }

  showImage(picture:any,event):void{
    //event.stopPropagation();
//this.imageViewer.create(picture).present();
return this.method.showImage(picture,event)
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  showCreatePage(){
    this.navCtrl.push(CreateProductPage);
  }
 
    
  setFilteredItems() {
 
    this.articles = this.data.filterItems(this.searchTerm);

}


  
}
