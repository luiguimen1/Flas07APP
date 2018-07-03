import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
/**
 * Generated class for the LeerqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-leerqr',
    templateUrl: 'leerqr.html',
})
export class LeerqrPage {

    constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LeerqrPage');
    }
   
        qrData = null;
        createdCode = null;
        scannedCode = null;
    
    
        createCode() {
            this.createdCode = this.qrData;
        }
    
        scanCode() {
            this.barcodeScanner.scan().then(barcodeData => {
                this.scannedCode = barcodeData.text;
            }, (err) => {
                console.log('Error: ', err);
            });
        }
        
}