import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    StudentsRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    Camera
  ],
  bootstrap: []
})
export class StudentsModule { }
