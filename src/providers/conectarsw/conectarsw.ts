import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarswProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarswProvider {

    url = 'http://192.168.0.225:8081/flas07/';

    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    constructor(public http: HttpClient) {
        console.log('Hello ConectarswProvider Provider');
    }

    listarCategoria() {
        let urlLocal = this.url + "Controller/Categoria/listarCategoria.php";
        return this.http.post(urlLocal, JSON.stringify({acesso: true}), this.options);
    }

    registarCategoria(categoria) {
        let urlLocal = this.url + "Controller/Categoria/CrearCategoria.php";
        return this.http.post(urlLocal, JSON.stringify(categoria), this.options);
    }



}