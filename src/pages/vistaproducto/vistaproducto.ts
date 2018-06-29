import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the VistaproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-vistaproducto',
    templateUrl: 'vistaproducto.html',
})
export class VistaproductoPage {
    producto;
    type = 2;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.producto = this.navParams.get("producto");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VistaproductoPage');
    }

    VerSD() {

    }

    verCAM() {

    }

}
