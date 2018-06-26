import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the ForcreproPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forcrepro',
    templateUrl: 'forcrepro.html',
})
export class ForcreproPage {
    ForRegProd: FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private alertCtrl: AlertController) {
        this.iniciarFormulario()
    }

    iniciarFormulario() {
        this.ForRegProd = this.fb.group({
            fkCat: ['', [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]],
            nombre: ['', [Validators.required, Validators.pattern(/^[a-z_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ ]{3,50}$/)]],
            descripcion: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ  ]{3,200}$/)]],
            valor: ['', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]],
            cant: ['', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForcreproPage');
    }

    registrarProdu() {
        let categoria = {
            cat: this.ForRegProd.value
        }
        console.table(categoria);
        let hola = "Confirmación";
        let mensaje = "La categoria fue creada si problema en el sistema";
        this.presentAlert(hola, mensaje);
        this.iniciarFormulario();
    }


    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirme la Creacion de la categoria',
            message: '<p>Esta completamente seguro....</p>',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        this.registrarProdu();
                    }
                }
            ]
        });
        alert.present();
    }

    presentAlert(titulo, mensjae) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensjae,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
