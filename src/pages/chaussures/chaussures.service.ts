import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data2 {
 
   jsonData: any;
 
    constructor() {
 
        this.jsonData=[
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
            ];
 
    }
 
    filterItems(searchTerm){
 
       return this.jsonData.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
 
}