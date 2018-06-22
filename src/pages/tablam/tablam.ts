import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TablamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tablam',
    templateUrl: 'tablam.html',
})
export class TablamPage {
    numero1;
    numero2;
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        let data = this.navParams.get("objecto");
        this.Operacion(data);
    }

    Operacion(data) {
        this.numero1 = data.n1;
        this.numero2 = data.n2;
        this.edificio = [];
        
        for(let i=0; i<this.numero2;i++){
            let piso={
                item: this.numero1,
                valor: (i+1),
                resul: (this.numero1 * (i+1))
            };
           // this.edificio[i] = piso;
           this.edificio.push(piso);
        }
    }
}
