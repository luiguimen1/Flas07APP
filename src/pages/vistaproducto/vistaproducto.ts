import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CapfotoPage} from '../capfoto/capfoto';


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
    constructor(public navCtrl: NavController, public navParams: NavParams,) {
        this.producto = this.navParams.get("producto");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VistaproductoPage');
    }
    
    capFoto() {
        let opciones = {
            type: 2,
            elemento: {
                id: this.producto.id,
                nombre: this.producto.nombre,
                foto: this.producto.foto
            }
        }
        this.navCtrl.push(CapfotoPage, {opciones: opciones});
    }

}
