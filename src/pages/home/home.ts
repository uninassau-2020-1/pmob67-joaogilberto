import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ViacepProvider } from '../../providers/viacep/viacep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

@Component({
  selector: 'alert-example',
  templateUrl: 'alert-example.html',
  //styleUrls: ['./alert-example.css'],
})

export class HomePage {

	private cep: String;
  private endereco: any = {};
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
		if (this.cep == null) {	// Validação se o campo de CEP estiver vazio
			this.alertNulo();
		} else
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
      title: 'CEP INVÁLIDO!',
      subTitle: 'Tente novamente',
      buttons: ['OK']
    });
    alert.present();
  }

  alertNulo() {
    let alert = this.alertCtrl.create({
      title: 'INFORME UM CEP!',
      subTitle: 'O campo está em branco',
      buttons: ['OK']
    });
    alert.present();
  }

}
