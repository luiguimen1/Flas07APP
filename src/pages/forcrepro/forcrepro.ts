import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';
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
    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private alertCtrl: AlertController, private conecta:ConectarswProvider) {
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
        this.traerCategorias();
    }
    
    edificio;
    traerCategorias(){
        let estado = this.conecta.listarCategoria();
        estado.subscribe(data=>{
            this.cargarListaCat(data);
        },err=>{
            this.presentAlert("Error #26", "No puede acceder al servidor WEB <br> Lista Categorias") 
        })
    }
    
    cargarListaCat(data){
        this.edificio = data;
    }
    
    registrarProdu() {
        let producto =this.ForRegProd.value;
        let estado = this.conecta.registarProducto(producto);
        estado.subscribe(data=>{
            this.procesarRespuesta(data);
        },
        err=>{
            this.presentAlert("Error #27", "<div class='error'>No se peude acceder al servidor WEB <br> Crear Producto</div>");
        });        
    }

    procesarRespuesta(data){
        if(data.success == "OK"){
            this.presentAlert("Confirmación", "<div class='acierto'>El producto fue registrado en la BD</div>");
            this.iniciarFormulario();
        }else{
            this.presentAlert("Error #28", "<div class='error'>No se peude acceder al servidor WEB <br> El prodcuto tiene problema s de registro</div>");
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
