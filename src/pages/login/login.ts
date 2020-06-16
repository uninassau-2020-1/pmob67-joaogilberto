import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  isUserLoggedIn: any = false;
  userInfo: any = {};

  constructor(public navCtrl: NavController, public fb: Facebook) {

  }

  loginWithFB(){
    this.fb.login(["public_profile","email"]).then( _loginRes => {

      this.fb.api('me/?fields=id,email,first_name,picture',["public_profile","email"]).then( apiRes => {
        
        this.userInfo = apiRes;
        this.isUserLoggedIn = true;

      }).catch( apiErr => console.log(apiErr));

    }).catch( loginErr => console.log(loginErr) )
  }

  logout(){
    this.fb.logout().then( _logoutRes => 
      this.isUserLoggedIn = false
    ).catch(logoutErr => 
      console.log(logoutErr)
    );
  }

  goHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  goCadastroPage(): void {
    this.navCtrl.push(CadastroPage);
  } 

}