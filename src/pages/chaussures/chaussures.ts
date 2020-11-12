import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { product } from '../../modeles/interface-products';
import { ImageViewerController } from 'ionic-img-viewer';
import { MethodProvider } from '../../providers/method/method';
import { DetailChaussurePage } from '../detail-chaussure/detail-chaussure';
import { CreateProductPage } from '../create-product/create-product';
import { Data2 } from './chaussures.service';


@IonicPage()
@Component({
  selector: 'page-chaussures',
  templateUrl: 'chaussures.html',
})
export class ChaussuresPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  articles: product[];  //tableau d'objets
  searchTerm : any="";
  jsonData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: Http,
    public imageViewer:ImageViewerController,public method:MethodProvider,public data:Data2) {

      this.articles=[
        {                                   //chaque obj entre{} et le tab entre []
        createdAt:new Date(),
        title:'Chaussure talon',
          description:'GENSHUO Marque Chaussures Femme Talons hauts 10 CM Pompes Rouge Talons hauts femmes Chaussures Talons hauts De Mariage Chaussures Pompes Noir Nude Chaussures Talons',
          price:110,
          id:'1',
          averageStar:2,
          categorie:'chaussures',
          availability:{
            available:true,
            type:'Livraison',
            feed:2,
            
          }
        ,
        pictures:[
          'assets/imgs/chaussure4.jpg',
          'assets/imgs/chaussure2.jpg',
          'assets/imgs/chaussure3.jpg'
        ]
        },
        {
          createdAt:new Date(),
          title:'Sandale',
          description:'BIGTREE chaussures femme talons Sexy talons hauts femmes pompes femmes sandales boucle sangle talons.',
          price:57,
          id:'2',
          averageStar:4,
          categorie:'chaussures',
          availability:{
            available:true,
            type:'Disponible en Magasin',
            feed:2
          
        },
        pictures:[
          'assets/imgs/chaussure1.jpg',
          'assets/imgs/chaussure6.jpg',
          'assets/imgs/chaussure5.jpg'
        ]},
        {
          createdAt:new Date(),
          title:'Boots',
          description:' imperméables - Doublure en tissu recyclé ReBOTL™ (40% minimum) - Nubuck haut de gamme issu d une tannerie classée Argent par le LWG.',
          price:69,
          id:'3',
          averageStar:3,
          categorie:'chaussures',
          availability:{
            available:true,
            type:'Livraison',
            feed:2
          
        },
        pictures:[
        
          'assets/imgs/chaussure7.jpg',
          'assets/imgs/chaussure8.jpg',
          'assets/imgs/chaussure9.jpg'
        ]},
        {
          createdAt:new Date(),
          title:'Basket',
          description:'Pour être au top du style même en courant, voici les chaussures femme JOTT ! Confortables et à la pointe de la mode, vous ne pourrez plus vous en passer.',
          price:78,
          id:'4',
          averageStar:5,
          categorie:'chaussures',
          availability:{
            available:true,
            type:'Livraison',
            feed:2
          
        },
        pictures:[
          'assets/imgs/chaussure10.jpg',
          'assets/imgs/chaussure11.jpg',
          'assets/imgs/chaussure12.jpg'
        ]},
        {
          createdAt:new Date(),
          title:'Mocassin',
          description:'Neuf avec emballage : Objet neuf, jamais porté, vendu dans d origine (comme la boîte ou la pochette d origine) et/ou avec étiquettes d origine.',
          price:49,
          id:'5',
          averageStar:3,
          categorie:'chaussure',
          availability:{
            available:true,
            type:'Livraison',
            feed:2
          
        },
        pictures:[
          'assets/imgs/chaussure13.jpeg',
          'assets/imgs/chaussure14.jpg',
          'assets/imgs/chaussure15.webp'
        ]},
        {
          createdAt:new Date(),
          title:'Ballarine',
          description:'Printemps été dames chaussures ballerines femmes chaussures plates femme ballerine grande taille.',
          price:27,
          id:'6',
          averageStar:3,
          categorie:'chaussures',
          availability:{
            available:true,
            type:'Livraison',
            feed:2
          
        },
        pictures:[
          'assets/imgs/chaussure16.jpg',
          'assets/imgs/chaussure17.jpg',
          'assets/imgs/chaussure18.jpg'
        ]},
        ]
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaussuresPage');
  }

  showDetails(article:product):void{
    this.navCtrl.push(DetailChaussurePage,{data:article});
      }

      showImage(picture:any,event):void{
        //event.stopPropagation();
    //this.imageViewer.create(picture).present();
    return this.method.showImage(picture,event)
      }

      showCreatePage(){
        this.navCtrl.push(CreateProductPage);
      }

      setFilteredItems() {
 
        this.articles = this.data.filterItems(this.searchTerm);
    }
      
}
