import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

/**
 * Generated class for the CapfotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-capfoto',
    templateUrl: 'capfoto.html',
})
export class CapfotoPage {
    data; // Es la encapsulacion de los datos enviados
    elemento; // Es la variable que puede llegar desde listaCategoria o desde vistaProducto
    type; // Determinara adonde se debe eviar la imagen para que se cargada en el servidor web
    calidad; // Es la calidad de foto, este valor cambia con el cambio de ion-range
    imageURI; // Variable que almacena la ruta local de imagen a cargar, ya se de desde la SD o desde la CAM

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
        this.data = this.navParams.get("opciones");
        this.elemento = this.data.elemento;
        this.calidad = 50;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CapfotoPage');
        this.type = this.data.type;

    }

    VerSD() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = imageData;
            })
            .catch(error => {
                console.error(error);
            });
    }

    verCAM() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: this.calidad
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    CargarImagen(){
        
    }

}
