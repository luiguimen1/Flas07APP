import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';

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
    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private alertCtrl: AlertController, private conecta:ConectarswProvider) {
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
        let estado = this.conecta.registarCategoria(categoria);
        
        estado.subscribe(data=>{
            this.analizarRes(data);
        },err=>{
         this.presentAlert("Error #23","No hay acceso al servidor WEB");
           console.log(err.messages); 
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForcrecatPage');
    }
    
    analizarRes(data){
        if(data.success == "OK"){
            this.presentAlert("Confirmación","La categoria fue creada sin problema");
            this. iniciarFormulario();
        }else{
            this.presentAlert("Error #24","La categoria NO fue creada.");
        }
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
