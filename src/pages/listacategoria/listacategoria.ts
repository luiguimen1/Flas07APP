import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';
import {ListaproductoPage} from '../listaproducto/listaproducto';

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
    filtro;
    conNumero;
    constructor(public navCtrl: NavController, public navParams: NavParams, private conecta: ConectarswProvider, public loadingCtrl: LoadingController) {
        this.filtro = false;
        this.conNumero = false;
        this.edificio = [];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListacategoriaPage');
        this.traerListaCat();
    }

    traerListaCat() {
        this.edificio = [];
        let loader = this.loadingCtrl.create({
            content: "Se esta consultado las Categorias"
        });
        loader.present();
        let estado = this.conecta.listarCategoria(this.filtro);
        estado.subscribe(data => {
            this.trabajarRespuesta(data);
            loader.dismiss();
        }, err => {
            loader.dismiss();
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
            if (!this.conNumero) {
                data[i] = piso;
                let nombre = piso.nombre.split("#");
                piso.nombre = nombre[0];
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

    irListaProducto(categoria) {
        let cat = {categoria: categoria};
        this.navCtrl.push(ListaproductoPage, cat);
    }

    ejecutarFiltro() {
        this.traerListaCat();
    }

    ejecutarNumero() {
        this.traerListaCat();
    }

    Activar() {
        this.traerListaCat();
    }
}
