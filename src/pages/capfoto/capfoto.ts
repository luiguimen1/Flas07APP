import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {LoadingController} from 'ionic-angular';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {AlertController} from 'ionic-angular';

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
    titulo = ""; // Variable que identifica el objecto a cambiar
    //ruta = "http://192.168.0.225:8081/Flas07/Controller/subirImg/load.php"; // es la ruta de cargar del servidor web 
    ruta = "http://www.mirayaprender.com.co/flas07/Controller/subirImg/load.php"; // es la ruta de cargar del servidor web 
    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: FileTransfer,
        public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
        this.data = this.navParams.get("opciones");
        this.elemento = this.data.elemento;
        this.calidad = 50;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CapfotoPage');
        this.type = this.data.type;
        switch (this.type) {
            case 1:
                this.titulo = "Categoría";
                break;
            case 2:
                this.titulo = "Producto";
                break;
        }

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

    CargarImagen() {
        let datos = {id: this.elemento.id, type: this.type, old: this.elemento.foto};
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b> con la info:" + datos.id + " " + datos.type
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
        fileTransfer.upload(this.imageURI, this.ruta, options)
            .then((data) => {
                this.actualizar(data);
                loader.dismiss();
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.presentAlert("Error # 29", "No existe conexión con el servidor");
                // Puede Colocar una alerta de que existe un problema con el servidor
            });
    }

    actualizar(data) {
        if (data.response != "no") {
            this.presentAlert("Confirmación", "<p>" + JSON.stringify(data) + "</p>");
            // Puede Colocar una alerta de que la imagen fue cargada
        } else {
            // Puede Colocar una alerta de que la imagen NO fue cargada
            this.presentAlert("Error # 30", "No se cargo la Imagen");
        }
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
