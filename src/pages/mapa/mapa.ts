import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const position = new google.maps.LatLng(-8.0108174, -34.8547737);

    const mapOptions = {
      zoom: 15,
      center: position,
      disableDefaultUI: false
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,

      //Titulo
      //title: 'Minha posição',

      //Animção
      animation: google.maps.Animation.BOUNCE, // DROP

      //Icone
      //icon: 'assets/imgs/pessoa.png'
    });
  }
}