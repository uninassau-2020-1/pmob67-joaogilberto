import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ViacepProvider } from '../../providers/viacep/viacep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapaPage } from '../mapa/mapa';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	public cep: String = '';
  public endereco: any = {};
  cepForm: FormGroup; // Form criado para manipular e validar o CEP digitado

	constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
		private viacep: ViacepProvider,
		public formBuilder: FormBuilder) {
		this.cepForm = this.formBuilder.group({
			cep: [null, [Validators.required]]
		})
	}

	getEndereco() {
		if (this.cep == null || this.cep.length == 0) {	// Validação se o campo de CEP estiver vazio
			this.alertNulo();
    }
    else if (this.cep.length > 0 && this.cep.length < 9 ) {
      this.alertInvalido2();
      this.cepForm.reset(this.cep);
    }
      else
			this.viacep.callService(this.cep) // Chamada do serviço ViaCep
				.subscribe(
					(data: any) => {
						if ("erro" in data) { // Validação se o número de CEP informado não encontrar resultados
							this.alertInvalido();
						}
						this.endereco = data;
						this.cepForm.reset();
					}
        )
  }

  alertInvalido() {
    let alert = this.alertCtrl.create({
      title: 'CEP INVÁLIDO:',
      subTitle: 'A busca não obteve resultados, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }

  alertInvalido2() {
    let alert = this.alertCtrl.create({
      title: 'CEP INVÁLIDO:',
      subTitle: 'O campo precisa conter 8 digitos.',
      buttons: ['OK']
    });
    alert.present();
  }

  alertNulo() {
    let alert = this.alertCtrl.create({
      title: 'INFORME UM CEP:',
      subTitle: 'O campo está em branco.',
      buttons: ['OK']
    });
    alert.present();
  }

  /*private localizacao: String;
  pegarURL(){
    this.localizacao = 'https://www.google.com/maps/search/?api=1&query='+this.cep.replace('-','');
    console.log(this.localizacao);
  }*/

  goMapaPage(): void {
    this.navCtrl.push(MapaPage);
  }
}