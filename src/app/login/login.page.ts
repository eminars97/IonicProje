import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {AuthService} from '../services/authService/auth.service';

import { Router } from '@angular/router'
import {AlertController,NavController} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string;
    password: string;
    isLoading = false;
    //username: string = ""
    //password: string = ""
    constructor(
      private afAuth: AngularFireAuth,
      private navCtrl: NavController,
      private router: Router,
      private authService: AuthService,
      private alert: AlertController
      ) { }

    ngOnInit() {
    }
    async presentAlert() {
      const alert = await this.alert.create({
          header: 'Uyarı',
          message: 'Email veya şifre hatalıdır',
          buttons: [{
              text: 'Tamam',
              role: 'resume',
          }]
      });
      await alert.present();
  }
    
    async login(){
      this.isLoading = true;
        this.authService.serviceLogin(this.email, this.password).then(() => {
            this.navCtrl.navigateRoot('/students').then(data => {
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            });
        }).catch(err => {
            this.isLoading = false;
            this.presentAlert();
        });
      


      /*
      const { username, password } = this
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com' , password)
            this.router.navigate(['/tabs'])
        } catch (err) {
          console.dir(err)
          if(err.code == "auth/user-not-found"){
          console.log("Kullanıcı Bulunamadı")
          }
        }*/
    }

}
