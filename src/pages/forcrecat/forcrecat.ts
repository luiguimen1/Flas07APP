import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ForcrecatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forcrecat',
    templateUrl: 'forcrecat.html',
})
export class ForcrecatPage {
    ForRegCate: FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    iniciarFormulario() {
        this.ForRegCate = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(/^[a-z_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ ]{3,50}$/)]],
            descripcion: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ  ]{3,200}$/)]]
        });
    }

    registrarCate() {
        let categoria = {
            cat: this.ForRegCate.value
        }
        console.table(categoria);
        let hola = "Confirmación";
        let mensaje = "La categoria fue creada si problema en el sistema";
        this.presentAlert(hola,mensaje);
        this.iniciarFormulario();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForcrecatPage');
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
                        this.registrarCate();
                    }
                }
            ]
        });
        alert.present();
    }

    presentAlert(titulo,mensjae) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensjae,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
