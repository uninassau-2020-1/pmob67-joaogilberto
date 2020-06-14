import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViacepProvider } from '../providers/viacep/viacep';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapaPage } from '../pages/mapa/mapa';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage,
    CadastroPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage,
    CadastroPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ViacepProvider,
    Geolocation    
  ]
})
export class AppModule {}