import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TablamPage} from '../pages/tablam/tablam';

import {RestaPage} from '../pages/resta/resta';
import {ForcrecatPage} from '../pages/forcrecat/forcrecat';
import {ForcreproPage} from '../pages/forcrepro/forcrepro';
import {ListacategoriaPage} from '../pages/listacategoria/listacategoria';
import {AlertaPage} from '../pages/alerta/alerta';
import {ListaproductoPage} from '../pages/listaproducto/listaproducto';
import {VistaproductoPage} from '../pages/vistaproducto/vistaproducto';
import {CapfotoPage} from '../pages/capfoto/capfoto';
import {ConectarswProvider} from '../providers/conectarsw/conectarsw';
import {HttpClientModule} from '@angular/common/http';
import {Camera} from '@ionic-native/camera';

import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer'; //
import {File} from '@ionic-native/file';

import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {LeerqrPage} from '../pages/leerqr/leerqr'

import {IndexPage} from '../pages/index/index';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RestaPage,
        TablamPage,
        ForcrecatPage,
        ForcreproPage,
        ListacategoriaPage,
        ListaproductoPage,
        AlertaPage,
        VistaproductoPage,
        CapfotoPage,
        LeerqrPage,
        IndexPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        NgxQRCodeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RestaPage,
        TablamPage,
        ForcrecatPage,
        ForcreproPage,
        ListacategoriaPage,
        ListaproductoPage,
        AlertaPage,
        VistaproductoPage,
        CapfotoPage,
        LeerqrPage,
        IndexPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarswProvider,
        Camera,
        FileTransfer,
     //   FileUploadOptions,
        FileTransferObject,
        File,
        BarcodeScanner
    ]
})
export class AppModule {}
