import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'
import {AlertController,NavController} from '@ionic/angular'
import {AuthService} from '../services/authService/auth.service';

import { __await } from 'tslib';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //username: string = ""
  //password: string = ""
  //cpassword: string = ""
  email: string;
    password: string;
    username: string;
    isLoading = false;
    
    constructor(
      public afAuth: AngularFireAuth,
      private alert: AlertController,
      public router: Router,
      private navCtrl: NavController,
      private authService: AuthService
      ) { }

    ngOnInit() {
    }
/*
    async register() {
        const {username, password, cpassword} = this
        if(password !== cpassword){
          this.showAlert("Error!!", "Şifre eşleşmedi")
            return console.error("Şifreler eşleşmedi")
        }
        try {
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)
          console.log(res)
          this.showAlert("Success","Welcome Aboard!")
          this.router.navigate(['/tabs'])
        } catch (error) {
          console.dir(error)
          this.showAlert("Error",error.message)
        }        
    }*/
    /*async showAlert(header:string, message:string){
        const alert = await this.alert.create({
            header,
            message,
            buttons: ["Ok"]
        })
      await alert.present()
      }*/
      register() {
        this.isLoading = true;
        this.authService.serviceSignup(this.email, this.password, this.username).then(() => {
            this.navCtrl.navigateRoot('login').catch((err) => {
                console.log(err);
            });
            this.isLoading = false;
        }).catch((err) => {
            this.isLoading = false;
            this.presentAlert();
        });
    }
    async presentAlert() {
      const alert = await this.alert.create({
          header: 'Uyarı',
          message: 'Aşağıdakileri kontrol ediniz<br>Şifreniz en az 8 karakter olmalı<br>Email adresinizin doğruluğunu kontrol ediniz',
          buttons: [{
              text: 'Tamam',
              role: 'resume',
          }]
      });
      await alert.present();
  }
      
}
