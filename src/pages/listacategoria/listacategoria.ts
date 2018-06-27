import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';

/**
 * Generated class for the ListacategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listacategoria',
    templateUrl: 'listacategoria.html',
})
export class ListacategoriaPage {
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams, private conecta: ConectarswProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListacategoriaPage');
        this.traerListaCat();
    }

    traerListaCat() {
        let estado = this.conecta.listarCategoria();
        estado.subscribe(data => {
            this.trabajarRespuesta(data);
        }, err => {

        });
    }

    trabajarRespuesta(data) {
        let fotoRemota = "http://192.168.0.225:8081/Flas07/imgCat/";
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let piso = data[i];
            if (piso.foto != "sinfotocat.jpg") {
                piso.foto = fotoRemota + piso.foto;
            } else {
                piso.foto = "assets/imgs/" + piso.foto;
            }
            data[i] = piso;
        }
        this.edificio = data
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
            this.traerListaCat();
        }, 2000);
    }

}
