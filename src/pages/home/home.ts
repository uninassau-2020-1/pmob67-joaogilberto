import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViacepProvider } from '../../providers/viacep/viacep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private cep: String;
	private endereco: any = {};

	constructor(
		public navCtrl: NavController,
		private viacep: ViacepProvider,
		public formBuilder: FormBuilder) { // validação do form inserida
		this.cepForm = this.formBuilder.group({
			cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]] // validação do cep
		})
	}

	getEndereco() {
		this.viacep.callService(this.cep.replace(/\./, '')) // tratamento da máscara
			.subscribe(
				(data: any) => {
					this.endereco = data;
					//console.log(this.cep);
					this.cepForm.reset();
				}
			);
	}
	cepForm: FormGroup; // validação do cep	

}