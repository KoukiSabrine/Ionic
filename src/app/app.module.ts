import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';
import { Robe1Page } from '../pages/robe1/robe1';
import { ChaussuresPage } from '../pages/chaussures/chaussures';
import { AccessoiresPage } from '../pages/accessoires/accessoires';
import { IonicStorageModule } from '@ionic/storage';
import { CartPage } from '../pages/cart/cart';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MethodProvider } from '../providers/method/method';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductPage } from '../pages/create-product/create-product';
import { DetailChaussurePage } from '../pages/detail-chaussure/detail-chaussure';
import { DetailAccessoirePage } from '../pages/detail-accessoire/detail-accessoire';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { ContactPage } from '../pages/contact/contact';
import { DetailChaussurePageModule } from '../pages/detail-chaussure/detail-chaussure.module';
import { DetailAccessoirePageModule } from '../pages/detail-accessoire/detail-accessoire.module';
import { Robe1PageModule } from '../pages/robe1/robe1.module';
import { Data } from '../pages/list/list.service';
import { Data2 } from '../pages/chaussures/chaussures.service';
import { Data3 } from '../pages/accessoires/accessoires.service';
import { LoginPage } from '../pages/login/login';
import{ImagePicker} from '@ionic-native/image-picker';
import { Login2Page } from '../pages/login2/login2';
import { SignInPage } from '../pages/sign-in/sign-in';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,ChaussuresPage,AccessoiresPage,CartPage,CreateProductPage ,
    ContactPage,LoginPage,Login2Page,SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule,IonicStorageModule.forRoot(),IonicImageViewerModule,HttpClientModule,
    DetailChaussurePageModule,DetailAccessoirePageModule,Robe1PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,ChaussuresPage,AccessoiresPage,CartPage,CreateProductPage,
    ContactPage,LoginPage,Login2Page,SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MethodProvider,
    FavoriteProvider, Data,Data2,Data3,ImagePicker,
  ]
})
export class AppModule {}
