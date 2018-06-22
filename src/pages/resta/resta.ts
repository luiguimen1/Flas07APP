import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-resta',
    templateUrl: 'resta.html',
})
export class RestaPage {
    numero1;
    numero2;
    resultado
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        let data = this.navParams.get("objecto");
        this.Operacion(data);
    }

    Operacion(data) {
        this.numero1 = data.n1;
        this.numero2 = data.n2;
        this.resultado = this.numero1 - this.numero2;
    }

}
