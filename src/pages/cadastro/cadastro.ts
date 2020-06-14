import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: string;
  senha: string;
  rpsenha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastra(){
    console.log("Usuario "+ this.usuario)
    console.log("Senha "+ this.senha)
    console.log("RpSenha "+ this.rpsenha)
  }
}
