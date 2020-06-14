import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  entrar(){
    console.log("Usuario "+ this.usuario)
    console.log("Senha "+ this.senha)
  }

  goHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  goCadastroPage(): void {
    this.navCtrl.push(CadastroPage);
  }

}