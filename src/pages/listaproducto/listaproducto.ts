import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';
import {VistaproductoPage} from '../vistaproducto/vistaproducto';

/**
 * Generated class for the ListaproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listaproducto',
    templateUrl: 'listaproducto.html',
})
export class ListaproductoPage {
    categoria;
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams, private conecta: ConectarswProvider) {
        this.categoria = this.navParams.get("categoria");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaproductoPage');
        this.traerProductos();
    }

    traerProductos() {
        let cat = {
            id: this.categoria.id
        };
        let estado = this.conecta.listarProdXCat(cat);
        estado.subscribe(data => {
            this.trabajarRespuesta(data);
        }, err => {

        });
    }

    trabajarRespuesta(data) {
        let fotoRemota = "http://192.168.0.225:8081/Flas07/imgPro/";
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let piso = data[i];
            if (piso.foto != "sinfotopro.jpg") {
                piso.foto = fotoRemota + piso.foto;
            } else {
                piso.foto = "assets/imgs/" + piso.foto;
            }
        }
        this.edificio = data
    }
    
    
    verDetProducto(producto){
        let pro = {producto: producto};
        this.navCtrl.push(VistaproductoPage,pro);
    }
}
