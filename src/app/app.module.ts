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
import {ConectarswProvider} from '../providers/conectarsw/conectarsw';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RestaPage,
        TablamPage,
        ForcrecatPage,
        ForcreproPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RestaPage,
        TablamPage,
        ForcrecatPage,
        ForcreproPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarswProvider
    ]
})
export class AppModule {}
