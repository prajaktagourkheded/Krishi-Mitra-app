import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule  , HttpClient} from '@angular/common/http';
import {TranslateModule , TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicStorageModule} from '@ionic/storage';
import { CropService} from './services/crop.service';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation/ngx'
// import { Firebase } from '@ionic-native/firebase/ngx';

// import { SoilPipe } from './Soil/soil.pipe';

var firebaseConfig = {
  apiKey: "AIzaSyDOl7IPpQHy9pgQDCvteLdfVPKJZzR5ZU0",
  authDomain: "krishiapp-f22d2.firebaseapp.com",
  databaseURL: "https://krishiapp-f22d2.firebaseio.com",
  projectId: "krishiapp-f22d2",
  storageBucket: "krishiapp-f22d2.appspot.com",
  messagingSenderId: "916307068509",
  appId: "1:916307068509:web:3617ce477afa7d41356fb4",
  measurementId: "G-RCNMC4PPFT"
};

export function createTranslateLoader(http : HttpClient){
  return new TranslateHttpLoader(http , 'assets/lan/' , '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
      IonicStorageModule.forRoot(),
      TranslateModule.forRoot({
        loader : {
            provide : TranslateLoader,
            useFactory : (createTranslateLoader),
            deps : [HttpClient]
        }

      })

  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
