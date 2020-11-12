import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
   jsonData: any;
 
    constructor() {
 
        this.jsonData=[
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
            ];
 
    }
 
    filterItems(searchTerm){
 
       return this.jsonData.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
 
}