webpackJsonp([8],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n      \n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen class="bg">\n <img src="assets/imgs/shop.jpg">\n <h1>Shop & Love</h1>\n <h2>Girls Heaven</h2>\n \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoiresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_product_create_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_accessoire_detail_accessoire__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accessoires_service__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccessoiresPage = /** @class */ (function () {
    function AccessoiresPage(navCtrl, navParams, http, imageViewer, method, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.imageViewer = imageViewer;
        this.method = method;
        this.data = data;
        this.searchTerm = "";
        this.articles = [
            {
                createdAt: new Date(),
                title: 'Lunettes de soleil',
                description: 'Pour passer l été au soleil en toute sécurité, pensez à protéger vos yeux avec des lunettes de soleil. Véritable accessoire de mode elles sauront parfaire votre style.',
                price: 377,
                id: '1',
                averageStar: 3,
                categorie: 'accessoire',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/accessoire1.jpg',
                    'assets/imgs/accessoire2.jpg',
                    'assets/imgs/accessoire3.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Accessoires cheveux',
                description: 'LABIUO 7 Couleurs Bandeau Cheveux Femme, Bandeau Mignon Noeud Serre-Tête Femme Elastique.',
                price: 47,
                id: '2',
                averageStar: 1,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire4.jpg',
                    'assets/imgs/accessoire5.jpg',
                    'assets/imgs/accessoire6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Bijoux',
                description: 'Collier or perles de rocailles discret multicolore gypsy multicolore NILAI.',
                price: 154,
                id: '3',
                averageStar: 5,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire7.jpg',
                    'assets/imgs/accessoire8.jpg',
                    'assets/imgs/accessoire9.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Boucles d oreilles',
                description: 'Boucles d oreilles Juste un Clou, or rose 18 carats, serti de 28 diamants taille brillant pour 0.17 carat. Largeur 1.8mm. Diamètre intérieur 40mm.',
                price: 69,
                id: '4',
                averageStar: 3,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire10.webp',
                    'assets/imgs/accessoire11.jpg',
                    'assets/imgs/accessoire12.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Sac',
                description: 'Pépite-mode de la saison. Ce sac mixe le otin et l effet cuir, pour un look urbain et original.',
                price: 99,
                id: '5',
                averageStar: 4,
                categorie: 'accessoire',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire14.jpg',
                    'assets/imgs/accessoire13.jpg',
                    'assets/imgs/accessoire15.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Chapeaux',
                description: 'Le chapeau, c’est l’accessoire mode dans toute sa splendeur.',
                price: 89,
                id: '6',
                averageStar: 4,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire18.jpg',
                    'assets/imgs/accessoire16.jpg',
                    'assets/imgs/accessoire17.jpg'
                ]
            },
        ];
    }
    AccessoiresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessoiresPage');
    };
    AccessoiresPage.prototype.showDetails = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_accessoire_detail_accessoire__["a" /* DetailAccessoirePage */], { data: article });
    };
    AccessoiresPage.prototype.showImage = function (picture, event) {
        return this.method.showImage(picture, event);
    };
    AccessoiresPage.prototype.showCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_product_create_product__["a" /* CreateProductPage */]);
    };
    AccessoiresPage.prototype.setFilteredItems = function () {
        this.articles = this.data.filterItems(this.searchTerm);
    };
    AccessoiresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accessoires',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\accessoires\accessoires.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>accessoires</ion-title>\n    <br>\n    <br>\n    <br>\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <button ion-item (click)="showDetails(article)" *ngFor="let article of articles"  >\n      <ion-thumbnail item-start>\n        <img [src]="article.pictures[0]" #picture (click)="showImage(picture,$event)"> <!-- \'imageViewer\' permettant de fusionner l\'image-->\n  \n      </ion-thumbnail>\n  <h2>{{article.title}}</h2>\n  <h3>{{article.description}}</h3>\n  <p>{{article.availability.available}}</p>\n  \n  <p><span *ngIf="article.averageStar >=1">\n    <ion-icon class="iconYellow" name="star"></ion-icon>\n    </span>\n    <span *ngIf="article.averageStar >=2">\n      <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n      <span *ngIf="article.averageStar >=3">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="article.averageStar >=4">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="article.averageStar >=5">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n            </span>\n    </p>\n  \n    </button>\n  </ion-list>\n  \n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="showCreatePage()" ion-button round large>\n         <ion-icon name="camera">&nbsp;\n            Vendre vos biens\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\accessoires\accessoires.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_4__providers_method_method__["a" /* MethodProvider */], __WEBPACK_IMPORTED_MODULE_7__accessoires_service__["a" /* Data3 */]])
    ], AccessoiresPage);
    return AccessoiresPage;
}());

//# sourceMappingURL=accessoires.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login2Page = /** @class */ (function () {
    function Login2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Login2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login2Page');
    };
    Login2Page.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Login2Page.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignInPage */]);
    };
    Login2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login2',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\login2\login2.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n  <h2>Welcome to shopping</h2><br>\n  <br><br><br><br><br><br> <br><br><br><br><br><br><br>\n <!-- <img src="assets/imgs/log3.png">-->\n  <button ion-button (click)="signup()" block>signup</button><br>\n  <button ion-button (click)="signIn()" block>signin</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\login2\login2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], Login2Page);
    return Login2Page;
}());

//# sourceMappingURL=login2.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = /** @class */ (function () {
    //u:User;
    function SignInPage(navCtrl, navParams, storage, formBuilder, viewCtrl) {
        //this.u=this.navParams.get("data");
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.user = { username: '', password: '' };
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            remember: true
        });
        storage.get('user').then(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                _this.loginForm
                    .patchValue({
                    'username': _this.user.username,
                    'password': _this.user.password
                });
            }
            else
                console.log('user not defined');
        });
    }
    SignInPage.prototype.onSubmit = function () {
        console.log(this.loginForm.value, this.user);
        this.user.username = this.loginForm.get('username').value;
        this.user.password = this.loginForm.get('password').value;
        console.log(this.user);
        if (this.loginForm.get('remember').value)
            this.storage.set('user', this.user);
        else
            this.storage.remove('user');
        this.viewCtrl.dismiss();
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
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
    SignInPage.prototype.goo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\sign-in\sign-in.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>signIn</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remember Me</ion-label>\n      <ion-checkbox color="primary" formControlName="remember" checked="true"></ion-checkbox>\n    </ion-item>\n    <button (click)="goo()" ion-button type="submit" [disabled]="!loginForm.valid">Login</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChaussuresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_chaussure_detail_chaussure__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_product_create_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chaussures_service__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChaussuresPage = /** @class */ (function () {
    function ChaussuresPage(navCtrl, navParams, http, imageViewer, method, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.imageViewer = imageViewer;
        this.method = method;
        this.data = data;
        this.searchTerm = "";
        this.articles = [
            {
                createdAt: new Date(),
                title: 'Chaussure talon',
                description: 'GENSHUO Marque Chaussures Femme Talons hauts 10 CM Pompes Rouge Talons hauts femmes Chaussures Talons hauts De Mariage Chaussures Pompes Noir Nude Chaussures Talons',
                price: 110,
                id: '1',
                averageStar: 2,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/chaussure4.jpg',
                    'assets/imgs/chaussure2.jpg',
                    'assets/imgs/chaussure3.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Sandale',
                description: 'BIGTREE chaussures femme talons Sexy talons hauts femmes pompes femmes sandales boucle sangle talons.',
                price: 57,
                id: '2',
                averageStar: 4,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure1.jpg',
                    'assets/imgs/chaussure6.jpg',
                    'assets/imgs/chaussure5.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Boots',
                description: ' imperméables - Doublure en tissu recyclé ReBOTL™ (40% minimum) - Nubuck haut de gamme issu d une tannerie classée Argent par le LWG.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure7.jpg',
                    'assets/imgs/chaussure8.jpg',
                    'assets/imgs/chaussure9.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Basket',
                description: 'Pour être au top du style même en courant, voici les chaussures femme JOTT ! Confortables et à la pointe de la mode, vous ne pourrez plus vous en passer.',
                price: 78,
                id: '4',
                averageStar: 5,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure10.jpg',
                    'assets/imgs/chaussure11.jpg',
                    'assets/imgs/chaussure12.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Mocassin',
                description: 'Neuf avec emballage : Objet neuf, jamais porté, vendu dans d origine (comme la boîte ou la pochette d origine) et/ou avec étiquettes d origine.',
                price: 49,
                id: '5',
                averageStar: 3,
                categorie: 'chaussure',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure13.jpeg',
                    'assets/imgs/chaussure14.jpg',
                    'assets/imgs/chaussure15.webp'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Ballarine',
                description: 'Printemps été dames chaussures ballerines femmes chaussures plates femme ballerine grande taille.',
                price: 27,
                id: '6',
                averageStar: 3,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure16.jpg',
                    'assets/imgs/chaussure17.jpg',
                    'assets/imgs/chaussure18.jpg'
                ]
            },
        ];
    }
    ChaussuresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChaussuresPage');
    };
    ChaussuresPage.prototype.showDetails = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_chaussure_detail_chaussure__["a" /* DetailChaussurePage */], { data: article });
    };
    ChaussuresPage.prototype.showImage = function (picture, event) {
        //event.stopPropagation();
        //this.imageViewer.create(picture).present();
        return this.method.showImage(picture, event);
    };
    ChaussuresPage.prototype.showCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_product_create_product__["a" /* CreateProductPage */]);
    };
    ChaussuresPage.prototype.setFilteredItems = function () {
        this.articles = this.data.filterItems(this.searchTerm);
    };
    ChaussuresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chaussures',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\chaussures\chaussures.html"*/'\n<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>chaussures</ion-title>\n    <br>\n    <br>\n    <br>\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <button ion-item (click)="showDetails(article)" *ngFor="let article of articles"  >\n      <ion-thumbnail item-start>\n        <img [src]="article.pictures[0]" #picture (click)="showImage(picture,$event)"> <!-- \'imageViewer\' permettant de fusionner l\'image-->\n  \n      </ion-thumbnail>\n  <h2>{{article.title}}</h2>\n  <h3>{{article.description}}</h3>\n  <p>{{article.availability.available}}</p>\n  <p><span *ngIf="article.averageStar >=1">\n    <ion-icon class="iconYellow" name="star"></ion-icon>\n    </span>\n    <span *ngIf="article.averageStar >=2">\n      <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n      <span *ngIf="article.averageStar >=3">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="article.averageStar >=4">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="article.averageStar >=5">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n            </span>\n    </p>\n    </button>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="showCreatePage()" ion-button round large>\n         <ion-icon name="camera">&nbsp;\n            Vendre vos biens\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\chaussures\chaussures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_4__providers_method_method__["a" /* MethodProvider */], __WEBPACK_IMPORTED_MODULE_7__chaussures_service__["a" /* Data2 */]])
    ], ChaussuresPage);
    return ChaussuresPage;
}());

//# sourceMappingURL=chaussures.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accessoires/accessoires.module": [
		711,
		7
	],
	"../pages/cart/cart.module": [
		715,
		6
	],
	"../pages/chaussures/chaussures.module": [
		713,
		5
	],
	"../pages/contact/contact.module": [
		712,
		4
	],
	"../pages/create-product/create-product.module": [
		714,
		3
	],
	"../pages/detail-accessoire/detail-accessoire.module": [
		328
	],
	"../pages/detail-chaussure/detail-chaussure.module": [
		330
	],
	"../pages/login/login.module": [
		717,
		1
	],
	"../pages/login2/login2.module": [
		718,
		2
	],
	"../pages/robe1/robe1.module": [
		331
	],
	"../pages/sign-in/sign-in.module": [
		716,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailAccessoirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailAccessoirePage = /** @class */ (function () {
    function DetailAccessoirePage(navCtrl, navParams, storage, toast, modal, method, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toast = toast;
        this.modal = modal;
        this.method = method;
        this.event = event;
        this.ProductDetail = this.navParams.get("data");
        this.event.subscribe('star-rating:changed', function (note) {
            console.log('Voici la note choisie', note);
        });
    }
    DetailAccessoirePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailAccessoirePage');
    };
    DetailAccessoirePage.prototype.addToCart = function (ProductDetail) {
        var _this = this;
        var added = false;
        //si le panier est vide
        this.storage.get("Cart").then(function (data) {
            if (data === null || data.length === 0) {
                data = [];
                data.push({
                    item: ProductDetail,
                    qty: 1,
                    amount: ProductDetail.price
                });
            }
            else {
                //si le panier n'est pas vide
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    if (ProductDetail.id === element.item.id) {
                        //le panier n'est pas vide et  contient  d'articles
                        //il y a au moins un article qui existe déja
                        element.qty += 1;
                        element.amount += ProductDetail.price;
                        added = true;
                    }
                }
                if (!added) {
                    //le panier n'est pas vide et ne contient pas d'articles
                    data.push({
                        item: ProductDetail,
                        qty: 1,
                        amount: ProductDetail.price
                    });
                }
            }
            _this.storage.set("Cart", data)
                .then(function (data) {
                var options = {
                    message: "Votre panier a été mis à jour",
                    duration: 2000,
                    showCloseButton: true,
                    closeButtonText: "Fermer",
                };
                _this.toast.create(options).present();
            })
                .catch(function (err) {
                console.log("Erreur", err);
            });
        });
    };
    DetailAccessoirePage.prototype.openCart = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    DetailAccessoirePage.prototype.showImage = function (picture, event) {
        return this.method.showImage(picture, event);
    };
    DetailAccessoirePage.prototype.noter = function (ProductDetail) {
        this.storage.get("ProductDetail.averageStar");
        console.log('gggggg');
    };
    DetailAccessoirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-accessoire',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\detail-accessoire\detail-accessoire.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Détails</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="share"></ion-icon>\n      </button>\n<button (click)="openCart()" ion-button> \n  <ion-icon name="cart"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <ion-slides pager autoplay="1000" loop="true" >\n      <ion-slide *ngFor="let picture of ProductDetail.pictures">\n  <img [src]="picture"  >\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  \n   \n    <ion-card-content>\n     \n      <ion-card-title>\n        <ion-chip color="primary">\n          <ion-label>\n       {{ProductDetail.title}}\n          </ion-label>\n        </ion-chip> \n   \n        <ion-chip *ngIf="ProductDetail.availability.available" color="secondary">\n          <ion-label>\n            Disponible\n          </ion-label>\n        </ion-chip>\n  \n        <ion-chip *ngIf="!ProductDetail.availability.available" color="danger">\n          <ion-label>\n           Non disponible\n          </ion-label>\n        </ion-chip>\n  \n        <ion-chip >\n          <ion-label>\n       {{ProductDetail.availability.type}}\n          </ion-label>\n        </ion-chip> \n  \n      </ion-card-title>\n      <p>\n        Prix: {{ProductDetail.price | currency}}\n        &nbsp; <!-- pour l\'espace -->\n        <span *ngIf="ProductDetail.averageStar >=1">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="ProductDetail.averageStar >=2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="ProductDetail.averageStar >=3">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n            </span>\n            <span *ngIf="ProductDetail.averageStar >=4">\n              <ion-icon class="iconYellow" name="star"></ion-icon>\n              </span>\n              <span *ngIf="ProductDetail.averageStar >=5">\n                <ion-icon class="iconYellow" name="star"></ion-icon>\n                </span>\n      </p>\n    <p>\n      {{ProductDetail.description}}\n    </p>\n    <ion-grid>\n      <ion-row fullscreen>\n        <ion-col col-9>\n          <ionic3-star-rating #rating\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#f4e242" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          rating="3"\n          \n          >\n      </ionic3-star-rating>\n        </ion-col>\n        <ion-col col-1>\n<button (click)="noter()" ion-button padding small round color="secondary">Noter</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="addToCart(ProductDetail)" ion-button round large>\n         <ion-icon name="camera">&nbsp;\n         Ajouter au panier\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\detail-accessoire\detail-accessoire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_method_method__["a" /* MethodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], DetailAccessoirePage);
    return DetailAccessoirePage;
}());

//# sourceMappingURL=detail-accessoire.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data3 = /** @class */ (function () {
    function Data3() {
        this.jsonData = [
            {
                createdAt: new Date(),
                title: 'Lunettes de soleil',
                description: 'Pour passer l été au soleil en toute sécurité, pensez à protéger vos yeux avec des lunettes de soleil. Véritable accessoire de mode elles sauront parfaire votre style.',
                price: 377,
                id: '1',
                averageStar: 3,
                categorie: 'accessoire',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/accessoire1.jpg',
                    'assets/imgs/accessoire2.jpg',
                    'assets/imgs/accessoire3.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Accessoires cheveux',
                description: 'LABIUO 7 Couleurs Bandeau Cheveux Femme, Bandeau Mignon Noeud Serre-Tête Femme Elastique.',
                price: 47,
                id: '2',
                averageStar: 1,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire4.jpg',
                    'assets/imgs/accessoire5.jpg',
                    'assets/imgs/accessoire6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Bijoux',
                description: 'Collier or perles de rocailles discret multicolore gypsy multicolore NILAI.',
                price: 154,
                id: '3',
                averageStar: 5,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire7.jpg',
                    'assets/imgs/accessoire8.jpg',
                    'assets/imgs/accessoire9.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Boucles d oreilles',
                description: 'Boucles d oreilles Juste un Clou, or rose 18 carats, serti de 28 diamants taille brillant pour 0.17 carat. Largeur 1.8mm. Diamètre intérieur 40mm.',
                price: 69,
                id: '4',
                averageStar: 3,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire10.webp',
                    'assets/imgs/accessoire11.jpg',
                    'assets/imgs/accessoire12.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Sac',
                description: 'Pépite-mode de la saison. Ce sac mixe le otin et l effet cuir, pour un look urbain et original.',
                price: 99,
                id: '5',
                averageStar: 4,
                categorie: 'accessoire',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire14.jpg',
                    'assets/imgs/accessoire13.jpg',
                    'assets/imgs/accessoire15.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Chapeaux',
                description: 'Le chapeau, c’est l’accessoire mode dans toute sa splendeur.',
                price: 89,
                id: '6',
                averageStar: 4,
                categorie: 'accessoires',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/accessoire18.jpg',
                    'assets/imgs/accessoire16.jpg',
                    'assets/imgs/accessoire17.jpg'
                ]
            },
        ];
    }
    Data3.prototype.filterItems = function (searchTerm) {
        return this.jsonData.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    Data3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data3);
    return Data3;
}());

//# sourceMappingURL=accessoires.service.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailChaussurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailChaussurePage = /** @class */ (function () {
    function DetailChaussurePage(navCtrl, navParams, storage, toast, modal, method, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toast = toast;
        this.modal = modal;
        this.method = method;
        this.event = event;
        this.ProductDetail = this.navParams.get("data");
        this.event.subscribe('star-rating:changed', function (note) {
            console.log('Voici la note choisie', note);
        });
    }
    DetailChaussurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailChaussurePage');
    };
    DetailChaussurePage.prototype.addToCart = function (ProductDetail) {
        var _this = this;
        var added = false;
        //si le panier est vide
        this.storage.get("Cart").then(function (data) {
            if (data === null || data.length === 0) {
                data = [];
                data.push({
                    item: ProductDetail,
                    qty: 1,
                    amount: ProductDetail.price
                });
            }
            else {
                //si le panier n'est pas vide
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    if (ProductDetail.id === element.item.id) {
                        //le panier n'est pas vide et  contient  d'articles
                        //il y a au moins un article qui existe déja
                        element.qty += 1;
                        element.amount += ProductDetail.price;
                        added = true;
                    }
                }
                if (!added) {
                    //le panier n'est pas vide et ne contient pas d'articles
                    data.push({
                        item: ProductDetail,
                        qty: 1,
                        amount: ProductDetail.price
                    });
                }
            }
            _this.storage.set("Cart", data)
                .then(function (data) {
                var options = {
                    message: "Votre panier a été mis à jour",
                    duration: 2000,
                    showCloseButton: true,
                    closeButtonText: "Fermer",
                };
                _this.toast.create(options).present();
            })
                .catch(function (err) {
                console.log("Erreur", err);
            });
        });
    };
    DetailChaussurePage.prototype.openCart = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    DetailChaussurePage.prototype.showImage = function (picture, event) {
        //event.stopPropagation();
        //this.imageViewer.create(picture).present();
        return this.method.showImage(picture, event);
    };
    DetailChaussurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-chaussure',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\detail-chaussure\detail-chaussure.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Détails</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="share"></ion-icon>\n      </button>\n<button (click)="openCart()" ion-button> \n  <ion-icon name="cart"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <ion-slides pager autoplay="1000" loop="true" >\n      <ion-slide *ngFor="let picture of ProductDetail.pictures">\n  <img [src]="picture"  >\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  \n   \n    <ion-card-content>\n     \n      <ion-card-title>\n        <ion-chip color="primary">\n          <ion-label>\n       {{ProductDetail.title}}\n          </ion-label>\n        </ion-chip> \n   \n        <ion-chip *ngIf="ProductDetail.availability.available" color="secondary">\n          <ion-label>\n            Disponible\n          </ion-label>\n        </ion-chip>\n  \n        <ion-chip *ngIf="!ProductDetail.availability.available" color="danger">\n          <ion-label>\n           Non disponible\n          </ion-label>\n        </ion-chip>\n  \n        <ion-chip >\n          <ion-label>\n       {{ProductDetail.availability.type}}\n          </ion-label>\n        </ion-chip> \n  \n      </ion-card-title>\n      <p>\n        Prix: {{ProductDetail.price | currency}}\n      <!--</p>\n      <p>-->&nbsp; <!-- pour l\'espace -->\n        <span *ngIf="ProductDetail.averageStar >=1">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="ProductDetail.averageStar >=2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="ProductDetail.averageStar >=3">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n            </span>\n            <span *ngIf="ProductDetail.averageStar >=4">\n              <ion-icon class="iconYellow" name="star"></ion-icon>\n              </span>\n              <span *ngIf="ProductDetail.averageStar >=5">\n                <ion-icon class="iconYellow" name="star"></ion-icon>\n                </span>\n        </p>\n    <p>\n      {{ProductDetail.description}}\n    </p>\n    <ion-grid>\n      <ion-row fullscreen>\n        <ion-col col-9>\n          <ionic3-star-rating #rating\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#f4e242" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          rating="3"\n          >\n      </ionic3-star-rating>\n        </ion-col>\n        <ion-col col-1>\n<button ion-button padding small round color="secondary">Noter</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card-content>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="addToCart(ProductDetail)" ion-button round large>\n         <ion-icon name="camera">&nbsp;\n         Ajouter au panier\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\detail-chaussure\detail-chaussure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_method_method__["a" /* MethodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], DetailChaussurePage);
    return DetailChaussurePage;
}());

//# sourceMappingURL=detail-chaussure.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data2 = /** @class */ (function () {
    function Data2() {
        this.jsonData = [
            {
                createdAt: new Date(),
                title: 'Chaussure talon',
                description: 'GENSHUO Marque Chaussures Femme Talons hauts 10 CM Pompes Rouge Talons hauts femmes Chaussures Talons hauts De Mariage Chaussures Pompes Noir Nude Chaussures Talons',
                price: 110,
                id: '1',
                averageStar: 2,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/chaussure4.jpg',
                    'assets/imgs/chaussure2.jpg',
                    'assets/imgs/chaussure3.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Sandale',
                description: 'BIGTREE chaussures femme talons Sexy talons hauts femmes pompes femmes sandales boucle sangle talons.',
                price: 57,
                id: '2',
                averageStar: 4,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure1.jpg',
                    'assets/imgs/chaussure6.jpg',
                    'assets/imgs/chaussure5.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Boots',
                description: ' imperméables - Doublure en tissu recyclé ReBOTL™ (40% minimum) - Nubuck haut de gamme issu d une tannerie classée Argent par le LWG.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure7.jpg',
                    'assets/imgs/chaussure8.jpg',
                    'assets/imgs/chaussure9.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Basket',
                description: 'Pour être au top du style même en courant, voici les chaussures femme JOTT ! Confortables et à la pointe de la mode, vous ne pourrez plus vous en passer.',
                price: 78,
                id: '4',
                averageStar: 5,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure10.jpg',
                    'assets/imgs/chaussure11.jpg',
                    'assets/imgs/chaussure12.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Mocassin',
                description: 'Neuf avec emballage : Objet neuf, jamais porté, vendu dans d origine (comme la boîte ou la pochette d origine) et/ou avec étiquettes d origine.',
                price: 49,
                id: '5',
                averageStar: 3,
                categorie: 'chaussure',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure13.jpeg',
                    'assets/imgs/chaussure14.jpg',
                    'assets/imgs/chaussure15.webp'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Ballarine',
                description: 'Printemps été dames chaussures ballerines femmes chaussures plates femme ballerine grande taille.',
                price: 27,
                id: '6',
                averageStar: 3,
                categorie: 'chaussures',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/chaussure16.jpg',
                    'assets/imgs/chaussure17.jpg',
                    'assets/imgs/chaussure18.jpg'
                ]
            },
        ];
    }
    Data2.prototype.filterItems = function (searchTerm) {
        return this.jsonData.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    Data2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data2);
    return Data2;
}());

//# sourceMappingURL=chaussures.service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAccessoirePageModule", function() { return DetailAccessoirePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_accessoire__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailAccessoirePageModule = /** @class */ (function () {
    function DetailAccessoirePageModule() {
    }
    DetailAccessoirePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_accessoire__["a" /* DetailAccessoirePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_accessoire__["a" /* DetailAccessoirePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
        })
    ], DetailAccessoirePageModule);
    return DetailAccessoirePageModule;
}());

//# sourceMappingURL=detail-accessoire.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailChaussurePageModule", function() { return DetailChaussurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_chaussure__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailChaussurePageModule = /** @class */ (function () {
    function DetailChaussurePageModule() {
    }
    DetailChaussurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_chaussure__["a" /* DetailChaussurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_chaussure__["a" /* DetailChaussurePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
        })
    ], DetailChaussurePageModule);
    return DetailChaussurePageModule;
}());

//# sourceMappingURL=detail-chaussure.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Robe1PageModule", function() { return Robe1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robe1__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Robe1PageModule = /** @class */ (function () {
    function Robe1PageModule() {
    }
    Robe1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__robe1__["a" /* Robe1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__robe1__["a" /* Robe1Page */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
        })
    ], Robe1PageModule);
    return Robe1PageModule;
}());

//# sourceMappingURL=robe1.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Robe1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_method_method__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Robe1Page = /** @class */ (function () {
    function Robe1Page(navCtrl, navParams, storage, toast, modal, method, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toast = toast;
        this.modal = modal;
        this.method = method;
        this.event = event;
        this.ProductDetail = this.navParams.get("data");
        this.event.subscribe('star-rating:changed', function (note) {
            console.log('Voici la note choisie', note);
        });
    }
    Robe1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Robe1Page');
    };
    Robe1Page.prototype.addToCart = function (ProductDetail) {
        var _this = this;
        var added = false;
        //si le panier est vide
        this.storage.get("Cart").then(function (data) {
            if (data === null || data.length === 0) {
                data = [];
                data.push({
                    item: ProductDetail,
                    qty: 1,
                    amount: ProductDetail.price
                });
            }
            else {
                //si le panier n'est pas vide
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    if (ProductDetail.id === element.item.id) {
                        //le panier n'est pas vide et  contient  d'articles
                        //il y a au moins un article qui existe déja
                        element.qty += 1;
                        element.amount += ProductDetail.price;
                        added = true;
                    }
                }
                if (!added) {
                    //le panier n'est pas vide et ne contient pas d'articles
                    data.push({
                        item: ProductDetail,
                        qty: 1,
                        amount: ProductDetail.price
                    });
                }
            }
            _this.storage.set("Cart", data)
                .then(function (data) {
                var options = {
                    message: "Votre panier a été mis à jour",
                    duration: 2000,
                    showCloseButton: true,
                    closeButtonText: "Fermer",
                };
                _this.toast.create(options).present();
            })
                .catch(function (err) {
                console.log("Erreur", err);
            });
        });
    };
    Robe1Page.prototype.openCart = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    Robe1Page.prototype.showImage = function (picture, event) {
        //event.stopPropagation();
        //this.imageViewer.create(picture).present();
        return this.method.showImage(picture, event);
    };
    Robe1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-robe1',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\robe1\robe1.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Détails</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="share"></ion-icon>\n      </button>\n<button (click)="openCart()" ion-button> \n  <ion-icon name="cart"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n<ion-card>\n  <ion-slides pager autoplay="1000" loop="true" >\n    <ion-slide *ngFor="let picture of ProductDetail.pictures">\n<img [src]="picture"  >\n    </ion-slide>\n  </ion-slides>\n</ion-card>\n\n \n  <ion-card-content>\n   \n    <ion-card-title>\n      <ion-chip color="primary">\n        <ion-label>\n     {{ProductDetail.title}}\n        </ion-label>\n      </ion-chip> \n \n      <ion-chip *ngIf="ProductDetail.availability.available" color="secondary">\n        <ion-label>\n          Disponible\n        </ion-label>\n      </ion-chip>\n\n      <ion-chip *ngIf="!ProductDetail.availability.available" color="danger">\n        <ion-label>\n         Non disponible\n        </ion-label>\n      </ion-chip>\n\n      <ion-chip >\n        <ion-label>\n     {{ProductDetail.availability.type}}\n        </ion-label>\n      </ion-chip> \n\n    </ion-card-title>\n    <p>\n      Prix: {{ProductDetail.price | currency}}\n      &nbsp; <!-- pour l\'espace -->\n        <span *ngIf="ProductDetail.averageStar >=1">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="ProductDetail.averageStar >=2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="ProductDetail.averageStar >=3">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n            </span>\n            <span *ngIf="ProductDetail.averageStar >=4">\n              <ion-icon class="iconYellow" name="star"></ion-icon>\n              </span>\n              <span *ngIf="ProductDetail.averageStar >=5">\n                <ion-icon class="iconYellow" name="star"></ion-icon>\n                </span>\n    </p>\n  <p>\n    {{ProductDetail.description}}\n  </p>\n</ion-card-content>\n<ion-grid>\n  <ion-row fullscreen>\n    <ion-col col-9>\n      <ionic3-star-rating #rating\n      activeIcon = "ios-star"\n      defaultIcon = "ios-star-outline"\n      activeColor = "#f4e242" \n      defaultColor = "#f4f4f4"\n      readonly="false"\n      rating="3"\n      >\n  </ionic3-star-rating>\n    </ion-col>\n    <ion-col col-1>\n<button ion-button padding small round color="secondary">Noter</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="addToCart(ProductDetail)" ion-button round large>\n         <ion-icon name="camera">&nbsp;\n         Ajouter au panier\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\robe1\robe1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_method_method__["a" /* MethodProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], Robe1Page);
    return Robe1Page;
}());

//# sourceMappingURL=robe1.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__robe1_robe1__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_product_create_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_service__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, http, imageViewer, method, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.imageViewer = imageViewer;
        this.method = method;
        this.data = data;
        this.searchTerm = "";
        this.articles = [
            {
                createdAt: new Date(),
                title: 'Robe',
                description: 'Marque de mode pse877 Robe femme Dentelle  Robe De Soirée Vintage Robe robe sexy rétro Vêtements Pour Femmes robe negro Robes De Soirée De Mariage',
                price: 144,
                id: '1',
                averageStar: 5,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/robe5.jpg',
                    'assets/imgs/robe7.jpg',
                    'assets/imgs/robe6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Veste',
                description: 'Veste Mi Saison Femme Mauve Décontractée Longue Femme Coupe Vent Printemps',
                price: 87,
                id: '2',
                averageStar: 4,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/veste14.jpg',
                    'assets/imgs/veste13.jpg',
                    'assets/imgs/veste15.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Jupe',
                description: 'Notre coup de ❤ : Jupe mi-longue volantée !Tendance à suivre.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/jupe7.jpg',
                    'assets/imgs/jupe5.jpg',
                    'assets/imgs/jupe6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Pantalon',
                description: 'Pantalon taille et bas élastiques poches femme Pantalon. Taille élastique. Cordon de serrage. Poches passepoilées latérales.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/pantalon4.jpg',
                    'assets/imgs/pantalon5.jpg',
                    'assets/imgs/pantalon6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Pull',
                description: 'Pull manches 3/4 ajouré irisé ,Echancrure à double bride boutons 2 trous au dos',
                price: 244,
                id: '5',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/pull5.jpg',
                    'assets/imgs/pull6.jpg',
                    'assets/imgs/pull7.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Combinaison',
                description: 'Une combinaison-pantalon des plus féminines avec sa taille ceinturée',
                price: 99,
                id: '6',
                averageStar: 4,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/combinaison5.jpg',
                    'assets/imgs/combinaison6.jpg',
                    'assets/imgs/combinaison7.jpg'
                ]
            },
        ];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.showDetails = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__robe1_robe1__["a" /* Robe1Page */], { data: article });
    };
    ListPage.prototype.showImage = function (picture, event) {
        //event.stopPropagation();
        //this.imageViewer.create(picture).present();
        return this.method.showImage(picture, event);
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.showCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__create_product_create_product__["a" /* CreateProductPage */]);
    };
    ListPage.prototype.setFilteredItems = function () {
        this.articles = this.data.filterItems(this.searchTerm);
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vétements</ion-title>\n    <br>\n    <br>\n    <br>\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n <button ion-item (click)="showDetails(article)" *ngFor="let article of articles"  >\n    <ion-thumbnail item-start>\n      <img [src]="article.pictures[0]" #picture (click)="showImage(picture,$event)"> <!-- \'imageViewer\' permettant de fusionner l\'image-->\n\n    </ion-thumbnail>\n    \n<h2>{{article.title}}</h2>\n\n<h3>{{article.description}}</h3>\n<p>{{article.availability.available}}</p>\n<p><span *ngIf="article.averageStar >=1">\n  <ion-icon class="iconYellow" name="star"></ion-icon>\n  </span>\n  <span *ngIf="article.averageStar >=2">\n    <ion-icon class="iconYellow" name="star"></ion-icon>\n    </span>\n    <span *ngIf="article.averageStar >=3">\n      <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n      <span *ngIf="article.averageStar >=4">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="article.averageStar >=5">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n  </p>\n\n </button>\n</ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col offset-1 col-10>\n      <button (click)="showCreatePage()" ion-button round large>\n     \n         <ion-icon name="camera">&nbsp;\n            Vendre vos biens\n         </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_6__providers_method_method__["a" /* MethodProvider */], __WEBPACK_IMPORTED_MODULE_8__list_service__["a" /* Data */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = /** @class */ (function () {
    function Data() {
        this.jsonData = [
            {
                createdAt: new Date(),
                title: 'Robe',
                description: 'Marque de mode pse877 Robe femme Dentelle  Robe De Soirée Vintage Robe robe sexy rétro Vêtements Pour Femmes robe negro Robes De Soirée De Mariage',
                price: 144,
                id: '1',
                averageStar: 5,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2,
                },
                pictures: [
                    'assets/imgs/robe5.jpg',
                    'assets/imgs/robe7.jpg',
                    'assets/imgs/robe6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Veste',
                description: 'Veste Mi Saison Femme Mauve Décontractée Longue Femme Coupe Vent Printemps',
                price: 87,
                id: '2',
                averageStar: 4,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Disponible en Magasin',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/veste14.jpg',
                    'assets/imgs/veste13.jpg',
                    'assets/imgs/veste15.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Jupe',
                description: 'Notre coup de ❤ : Jupe mi-longue volantée !Tendance à suivre.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/jupe7.jpg',
                    'assets/imgs/jupe5.jpg',
                    'assets/imgs/jupe6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Pantalon',
                description: 'Pantalon taille et bas élastiques poches femme Pantalon. Taille élastique. Cordon de serrage. Poches passepoilées latérales.',
                price: 69,
                id: '3',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/pantalon4.jpg',
                    'assets/imgs/pantalon5.jpg',
                    'assets/imgs/pantalon6.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Pull',
                description: 'Pull manches 3/4 ajouré irisé ,Echancrure à double bride boutons 2 trous au dos',
                price: 244,
                id: '5',
                averageStar: 3,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/pull5.jpg',
                    'assets/imgs/pull6.jpg',
                    'assets/imgs/pull7.jpg'
                ]
            },
            {
                createdAt: new Date(),
                title: 'Combinaison',
                description: 'Une combinaison-pantalon des plus féminines avec sa taille ceinturée',
                price: 99,
                id: '6',
                averageStar: 4,
                categorie: 'vétements',
                availability: {
                    available: true,
                    type: 'Livraison',
                    feed: 2
                },
                pictures: [
                    'assets/imgs/combinaison5.jpg',
                    'assets/imgs/combinaison6.jpg',
                    'assets/imgs/combinaison7.jpg'
                ]
            },
        ];
    }
    Data.prototype.filterItems = function (searchTerm) {
        return this.jsonData.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data);
    return Data;
}());

//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chaussures_chaussures__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accessoires_accessoires__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_product_create_product__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_favorite_favorite__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_detail_chaussure_detail_chaussure_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detail_accessoire_detail_accessoire_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_robe1_robe1_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_list_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chaussures_chaussures_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_accessoires_accessoires_service__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_image_picker__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login2_login2__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_sign_in_sign_in__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_9__pages_chaussures_chaussures__["a" /* ChaussuresPage */], __WEBPACK_IMPORTED_MODULE_10__pages_accessoires_accessoires__["a" /* AccessoiresPage */], __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */], __WEBPACK_IMPORTED_MODULE_16__pages_create_product_create_product__["a" /* CreateProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_27__pages_login2_login2__["a" /* Login2Page */], __WEBPACK_IMPORTED_MODULE_28__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accessoires/accessoires.module#AccessoiresPageModule', name: 'AccessoiresPage', segment: 'accessoires', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chaussures/chaussures.module#ChaussuresPageModule', name: 'ChaussuresPage', segment: 'chaussures', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-product/create-product.module#CreateProductPageModule', name: 'CreateProductPage', segment: 'create-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-accessoire/detail-accessoire.module#DetailAccessoirePageModule', name: 'DetailAccessoirePage', segment: 'detail-accessoire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-chaussure/detail-chaussure.module#DetailChaussurePageModule', name: 'DetailChaussurePage', segment: 'detail-chaussure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/robe1/robe1.module#Robe1PageModule', name: 'Robe1Page', segment: 'robe1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login2/login2.module#Login2PageModule', name: 'Login2Page', segment: 'login2', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__["b" /* IonicImageViewerModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_detail_chaussure_detail_chaussure_module__["DetailChaussurePageModule"], __WEBPACK_IMPORTED_MODULE_20__pages_detail_accessoire_detail_accessoire_module__["DetailAccessoirePageModule"], __WEBPACK_IMPORTED_MODULE_21__pages_robe1_robe1_module__["Robe1PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_9__pages_chaussures_chaussures__["a" /* ChaussuresPage */], __WEBPACK_IMPORTED_MODULE_10__pages_accessoires_accessoires__["a" /* AccessoiresPage */], __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */], __WEBPACK_IMPORTED_MODULE_16__pages_create_product_create_product__["a" /* CreateProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_27__pages_login2_login2__["a" /* Login2Page */], __WEBPACK_IMPORTED_MODULE_28__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_method_method__["a" /* MethodProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_22__pages_list_list_service__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_23__pages_chaussures_chaussures_service__["a" /* Data2 */], __WEBPACK_IMPORTED_MODULE_24__pages_accessoires_accessoires_service__["a" /* Data3 */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_image_picker__["a" /* ImagePicker */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MethodProvider = /** @class */ (function () {
    function MethodProvider(http, imageViewer) {
        this.http = http;
        this.imageViewer = imageViewer;
        console.log('Hello MethodProvider Provider');
    }
    MethodProvider.prototype.showImage = function (picture, event) {
        event.stopPropagation();
        this.imageViewer.create(picture).present();
        console.log("called from provider");
    };
    MethodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], MethodProvider);
    return MethodProvider;
}());

//# sourceMappingURL=method.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_method_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login2_login2__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, viewCtrl, storage, toast, alertCtrl, method) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.method = method;
        this.total = 0;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CartPage');
        this.storage.get("Cart")
            .then(function (data) {
            _this.cartItems = data;
            _this.cartItems.forEach(function (element) {
                if (element.item.availability.type === "Disponible en Magasin") {
                    element.item.availability.feed = 0;
                }
                _this.total += (element.item.price * element.qty);
            });
        })
            .catch(function (err) {
            console.log("Erreur", err);
        });
    };
    CartPage.prototype.CloseModal = function () {
        this.viewCtrl.dismiss();
    };
    CartPage.prototype.removeItem = function (article, index) {
        var _this = this;
        var options = {
            title: "Attention!",
            subTitle: 'Etes-vous sur de vouloir retirer cet article ?',
            buttons: [
                {
                    text: "annuler",
                    role: "concel"
                },
                {
                    text: "Retirer",
                    handler: function () {
                        var price = article.item.price;
                        var qty = article.qty;
                        var myTotal = qty * price;
                        _this.cartItems.splice(index, 1);
                        _this.storage.set("Cart", _this.cartItems)
                            .then(function (data) {
                            _this.total -= myTotal;
                            _this.toast.create({
                                message: "Article retiré du panier!",
                                duration: 2000
                            }).present();
                        })
                            .catch(function (error) {
                            console.log("error", error);
                        });
                    }
                }
            ]
        };
        this.alertCtrl.create(options).present();
    };
    CartPage.prototype.showImage = function (picture, event) {
        //event.stopPropagation();
        //this.imageViewer.create(picture).present();
        return this.method.showImage(picture, event);
    };
    CartPage.prototype.go = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    CartPage.prototype.log = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login2_login2__["a" /* Login2Page */]);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\cart\cart.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Mon Panier</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n<ion-list>\n  <button ion-item *ngFor="let article of cartItems ;let i=index">\n    <ion-thumbnail item-left>\n      <img [src]="article.item.pictures[0]" #picture (click)="showImage(picture,$event)">\n      <h2>{{article.item.title}}</h2>\n      <p>\n      <ion-badge color="secondary">{{article.qty}}</ion-badge>x{{article.item.price |currency}}\n    </p>\n     <!-- <p *ngIf="article.item.availability.feed"> Livraison : {{article.item.availability.feed}}></p>-->\n    \n      <p>Total : {{article.qty*article.item.price |currency}}</p>\n      <button ion-button (click)="log()">\n      <ion-icon name="mail"> </ion-icon>&nbsp;\n      Contacter \n    </button>\n    <button (click)="removeItem(article,i)" ion-button item-right icon-only clear color="danger">\n      <ion-icon name="remove-circle">\n\n      </ion-icon>\n    </button>\n    </ion-thumbnail>\n  </button>\n</ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="CloseModal()"> Fermer</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block outline>  Panier : {{total |currency}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_method_method__["a" /* MethodProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateProductPage = /** @class */ (function () {
    function CreateProductPage(navCtrl, navParams, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.categories = [];
        this.myProduct = {};
        this.myProduct.availability = {};
        this.myProduct.pictures = [];
        this.categories = [
            {
                title: 'Vétements'
            },
            {
                title: 'Chaussures'
            },
            {
                title: 'Accessoires'
            }
        ];
    }
    CreateProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateProductPage');
    };
    CreateProductPage.prototype.create = function (myProduct) {
        myProduct.id = '5';
        myProduct.createdAt = new Date();
        myProduct.availability.available = true;
        console.log('myProduct = ', myProduct);
    };
    CreateProductPage.prototype.pickImages = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 4,
            outputType: __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["b" /* OutputType */].FILE_URL
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            console.log('Images=', results);
            _this.myProduct.pictures = results;
        })
            .catch(function (error) {
            console.log('Erreur', error);
        });
    };
    CreateProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-product',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\create-product\create-product.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>createProduct</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <button ion-button full (click)="pickImages()">Ajouter Images</button>\n<ion-list>\n  <ion-item>\n    <ion-label>Nom</ion-label>\n    <ion-input type="text" [(ngModel)]="myProduct.title"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="myProduct.desc"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Prix</ion-label>\n    <ion-input type="text" [(ngModel)]="myProduct.price"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Catégorie du produit </ion-label>\n      <ion-select [(ngModel)]="myProduct.categorie" >\n        <ion-option [value]="cat.title" *ngFor="let cat of categories" >{{cat.title}}</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Mode d\'acquisition </ion-label>\n      <ion-select [(ngModel)]="myProduct.availability.type" >\n        <ion-option value="Livraison" >Livraison</ion-option>\n        <ion-option value="Disponible en Magasin" >Disponible en Magasin</ion-option>\n        <ion-option value="Main en Main" >Main en Main</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <button ion-button block (click)="create(myProduct)">Créer</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\create-product\create-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], CreateProductPage);
    return CreateProductPage;
}());

//# sourceMappingURL=create-product.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\contact\contact.html"*/'\n<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h3>Information De Lieu</h3>\n<p>121, Clear Water Bay Road\n  Clear Water Bay, Kowloon\n  HONG KONG</p>\n  <ion-icon name="call" color="secondary"></ion-icon>\n  Tel: +852 1234 5678\n  <br><br>\n  <ion-icon name="print"></ion-icon>\n  Fax: +852 8765 4321\n  <br><br>\n  <ion-icon name="mail" color="primary"></ion-icon>\n  Email:confusion@food.net\n  <br><br>\n  <button  ion-button round large color="secondary"><ion-icon name="call">&nbsp;\n   CALL\n    </ion-icon></button>\n    <button  ion-button round large color="primary"><ion-icon name="mail">&nbsp;\n      EMAIL\n       </ion-icon></button>\n\n       \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chaussures_chaussures__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accessoires_accessoires__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modal = modal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Vétements', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Chaussures', component: __WEBPACK_IMPORTED_MODULE_6__pages_chaussures_chaussures__["a" /* ChaussuresPage */] },
            { title: 'Accessoires', component: __WEBPACK_IMPORTED_MODULE_7__pages_accessoires_accessoires__["a" /* AccessoiresPage */] }
        ];
        this.pages2 = [
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openCart = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */]).present();
    };
    MyApp.prototype.contacter = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */]).present();
    };
    MyApp.prototype.openLogin = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    \n    <ion-list>\n      <ion-item-divider color="primary">\n        Produits\n      </ion-item-divider >\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n      <ion-item-divider color="primary">\n        Mon Compte\n      </ion-item-divider >\n      \n        \n      \n     <!-- <button menuClose ion-item *ngFor="let p of pages2" (click)="openPage(p)">\n        {{p.title}}\n        <p>Contactez nous!</p>\n        <ion-icon item-left name="contact"></ion-icon>\n      </button>-->\n\n      <button (click)="openCart()" menuClose ion-item>\n        <h2>Mon Panier</h2>\n        <p>Consulter votre panier!</p>\n        <ion-icon item-left name="cart"></ion-icon>\n      </button>\n\n      <button (click)="openLogin()" menuClose ion-item>\n        <h2>Login</h2>\n        <!--<p>Consulter votre panier!</p>-->\n        <ion-icon item-left name="log-in"></ion-icon>\n      </button>\n      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(http) {
        this.http = http;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        this.favorites.push(id);
        return true;
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, formBuilder, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.user = { username: '', password: '' };
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            remember: true
        });
        storage.get('user').then(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                _this.loginForm
                    .patchValue({
                    'username': _this.user.username,
                    'password': _this.user.password
                });
            }
            else
                console.log('user not defined');
        });
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            remember: true
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.onSubmit = function () {
        console.log(this.loginForm.value, this.user);
        this.user.username = this.loginForm.get('username').value;
        this.user.password = this.loginForm.get('password').value;
        console.log(this.user);
        if (this.loginForm.get('remember').value)
            this.storage.set('user', this.user);
        else
            this.storage.remove('user');
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.goo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>    \n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remember Me</ion-label>\n      <ion-checkbox color="primary" formControlName="remember" checked="true"></ion-checkbox>\n    </ion-item>\n    <button (click)="goo()" ion-button type="submit" [disabled]="!loginForm.valid">Login</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kouki sabrine\Desktop\MyProject\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map