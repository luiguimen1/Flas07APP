import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
    elemento;
    type;
    data;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.data = this.navParams.get("opciones");
        this.elemento = this.data.elemento;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CapfotoPage');        
        this.type = this.data.type;
        
    }
    
   VerSD(){
       
   }
   
   verCAM(){
       
   }

}
