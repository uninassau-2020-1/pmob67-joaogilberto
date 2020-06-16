import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public ListUser : any;  
  public todo: FormGroup;

  constructor(public navCtrl: NavController, private database: DatabaseProvider, private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      lastname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      identification: ['', Validators.required],
    });

  }
    CreateUser(){
      console.log(this.todo);
      
      this.database.CreateUser(this.todo.value.name, this.todo.value.identification).then( (data) => {
        console.log(data);
        this.GetAllUser();
      }, (error) => {
        console.log(error);
      })
    }

    GetAllUser(){
      this.database.GetAllUsers().then((data: any) => {
        console.log(data);
        this.ListUser = data;
      }, (error) => {
        console.log(error);
      })
    }

    DeleteUser(idUser){
      console.log(idUser);

    }

}
