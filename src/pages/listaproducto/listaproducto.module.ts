import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaproductoPage } from './listaproducto';

@NgModule({
  declarations: [
    ListaproductoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaproductoPage),
  ],
})
export class ListaproductoPageModule {}
