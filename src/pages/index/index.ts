import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
    usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
      this.usuario = this.navParams.get("usuario");
      console.table(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  
  cerrar(){
      this.presentAlert("Adios", "Esparamos que regrese pronto<br>" + this.usuario.nom);
      this.navCtrl.setRoot(HomePage);
  }
  
  presentAlert(titulo, mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
