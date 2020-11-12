import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data3 {
 
   jsonData: any;
 
    constructor() {
 
        this.jsonData=[
            {                                   //chaque obj entre{} et le tab entre []
            createdAt:new Date(),
            title:'Lunettes de soleil',
              description:'Pour passer l été au soleil en toute sécurité, pensez à protéger vos yeux avec des lunettes de soleil. Véritable accessoire de mode elles sauront parfaire votre style.',
              price:377,
              id:'1',
              averageStar:3,
              
              categorie:'accessoire',
              availability:{
                available:true,
                type:'Livraison',
                feed:2,
                
              }
            ,
            pictures:[
              'assets/imgs/accessoire1.jpg',
              'assets/imgs/accessoire2.jpg',
              'assets/imgs/accessoire3.jpg'
            ]
            },
            {
              createdAt:new Date(),
              title:'Accessoires cheveux',
              description:'LABIUO 7 Couleurs Bandeau Cheveux Femme, Bandeau Mignon Noeud Serre-Tête Femme Elastique.',
              price:47,
              id:'2',
              averageStar:1,
              categorie:'accessoires',
              availability:{
                available:true,
                type:'Disponible en Magasin',
                feed:2
              
            },
            pictures:[
              'assets/imgs/accessoire4.jpg',
              'assets/imgs/accessoire5.jpg',
              'assets/imgs/accessoire6.jpg'
            ]},
            {
              createdAt:new Date(),
              title:'Bijoux',
              description:'Collier or perles de rocailles discret multicolore gypsy multicolore NILAI.',
              price:154,
              id:'3',
              averageStar:5,
              categorie:'accessoires',
              availability:{
                available:true,
                type:'Livraison',
                feed:2
              
            },
            pictures:[
            
              'assets/imgs/accessoire7.jpg',
              'assets/imgs/accessoire8.jpg',
              'assets/imgs/accessoire9.jpg'
            ]},
            {
              createdAt:new Date(),
              title:'Boucles d oreilles',
              description:'Boucles d oreilles Juste un Clou, or rose 18 carats, serti de 28 diamants taille brillant pour 0.17 carat. Largeur 1.8mm. Diamètre intérieur 40mm.',
              price:69,
              id:'4',
              averageStar:3,
              categorie:'accessoires',
              availability:{
                available:true,
                type:'Livraison',
                feed:2
              
            },
            pictures:[
              'assets/imgs/accessoire10.webp',
              'assets/imgs/accessoire11.jpg',
              'assets/imgs/accessoire12.jpg'
            ]},
            {
              createdAt:new Date(),
              title:'Sac',
              description:'Pépite-mode de la saison. Ce sac mixe le otin et l effet cuir, pour un look urbain et original.',
              price:99,
              id:'5',
              averageStar:4,
              categorie:'accessoire',
              availability:{
                available:true,
                type:'Livraison',
                feed:2
              
            },
            pictures:[
              'assets/imgs/accessoire14.jpg',
              'assets/imgs/accessoire13.jpg',
              'assets/imgs/accessoire15.jpg'
            ]},
            {
              createdAt:new Date(),
              title:'Chapeaux',
              description:'Le chapeau, c’est l’accessoire mode dans toute sa splendeur.',
              price:89,
              id:'6',
              averageStar:4,
              categorie:'accessoires',
              availability:{
                available:true,
                type:'Livraison',
                feed:2
              
            },
            pictures:[
              'assets/imgs/accessoire18.jpg',
              'assets/imgs/accessoire16.jpg',
              'assets/imgs/accessoire17.jpg'
            ]},
            
            ];
 
    }
 
    filterItems(searchTerm){
 
       return this.jsonData.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
 
}