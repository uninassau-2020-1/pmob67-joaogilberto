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
		public formBuilder: FormBuilder) {
		this.cepForm = this.formBuilder.group({
			cep: [null, [Validators.required]]
		})
	}

	getEndereco() {
		if (this.cep == null) {	// Validação se o campo de CEP estiver vazio. 
			alert("INFORME UM CEP!");			
		} else
			this.viacep.callService(this.cep) // Chamada do serviço ViaCep
				.subscribe(
					(data: any) => {
						if ("erro" in data) { // Validação se o número de CEP informado não encontrar resultados.
							alert("CEP INVÁLIDO!");
						}
						this.endereco = data;
						this.cepForm.reset();
					}
				)
	}
	
	cepForm: FormGroup; // Form criado para manipular e validar o CEP digitado.

}