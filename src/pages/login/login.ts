import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  entrarFb() {

  }

  goHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  goCadastroPage(): void {
    this.navCtrl.push(CadastroPage);
  }

}