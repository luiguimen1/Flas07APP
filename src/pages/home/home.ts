import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaPage} from '../resta/resta';
import {TablamPage} from '../tablam/tablam';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    n1;
    n2;
    resultado;
    constructor(public navCtrl: NavController) {
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





}
