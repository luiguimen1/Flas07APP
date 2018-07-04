import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaPage} from '../resta/resta';
import {TablamPage} from '../tablam/tablam';
import {ForcrecatPage} from '../forcrecat/forcrecat';
import {ForcreproPage} from '../forcrepro/forcrepro';
import {ListacategoriaPage} from '../listacategoria/listacategoria';
import {LeerqrPage} from '../leerqr/leerqr';
import {AlertController} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';
import {LoadingController} from 'ionic-angular';
import {IndexPage} from '../index/index';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    n1;
    n2;
    resultado;
    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private conecta: ConectarswProvider, private loading: LoadingController) {
    }

    /**
     * Metodo que permite comvertir de String a float
     */
    conF(pV) {
        return parseFloat(pV);
    }

    suma() {
        this.resultado = "la suma de " + this.n1 + " + " + this.n2 + " = " + (this.conF(this.n1) + this.conF(this.n2));
    }

    resta() {
        let data = {
            n1: this.n1,
            n2: this.n2
        };
        this.navCtrl.push(RestaPage, {objecto: data});
    }
    Tabla() {
        let data = {
            n1: this.n1,
            n2: this.n2
        };
        this.navCtrl.push(TablamPage, {objecto: data});
    }

    irCreateCate() {
        this.navCtrl.push(ForcrecatPage);
    }

    irCreateProd() {
        this.navCtrl.push(ForcreproPage);
    }

    irListaCat() {
        this.navCtrl.push(ListacategoriaPage);
    }

    irCodQR() {
        this.navCtrl.push(LeerqrPage);
    }


    iniciar() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'usuario',
                    placeholder: 'usuario'
                },
                {
                    name: 'clave',
                    placeholder: 'clave',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ingresar',
                    handler: data => {
                        this.verificar(data);
                    }
                }
            ]
        });
        alert.present();
    }

    verificar(datosUser) {
        if (datosUser.usuario == "" || datosUser.clave == "") {
            this.presentAlert("Error #1 ", "Los campos no puedene estar solos");
        } else {
            let loader = this.loading.create({
                content: "<b>Se está procesando la solicitud</b>"
            });
            loader.present();

            let estado = this.conecta.ingreso(datosUser);
            estado.subscribe(data => {
                console.table(data);
                this.navCtrl.setRoot(IndexPage, {usuario: data[0]});
                loader.dismiss();
            }, err => {
                console.table(err);
                loader.dismiss();
            })
        }
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
