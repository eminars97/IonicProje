import { Component, OnInit } from '@angular/core';
import {AlertController,NavController} from '@ionic/angular'


@Component({
  selector: 'app-nothesabi',
  templateUrl: './nothesabi.page.html',
  styleUrls: ['./nothesabi.page.scss'],
})
export class NothesabiPage implements OnInit {
  vizenotu: number;
  vizenotuetkisi: number;
  finalnotuetkisi: number;
  vizenotu2: number;
  vizenotuAA: number;
  vizenotuAB: number;
  vizenotuBB: number;
  vizenotuBC: number;
  vizenotuCC: number;
  vizenotuDC: number;
  vizenotuDD: number;
  vizenotuFD: number;

  constructor(      private alert: AlertController,
                    private navCtrl: NavController

    ) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message: 'AA gelmesi için:'+this.vizenotuAA
        +'\n'+'AB gelmesi için:'+this.vizenotuAB
        +'\n'+'BB gelmesi için:'+this.vizenotuBB
        +'\n'+'CB gelmesi için:'+this.vizenotuBC
        +'\n'+'CC gelmesi için:'+this.vizenotuCC
        +'\n'+'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'AB gelmesi için:'+this.vizenotuAB
        +'\n'+'BB gelmesi için:'+this.vizenotuBB
        +'\n'+'CB gelmesi için:'+this.vizenotuBC
        +'\n'+'CC gelmesi için:'+this.vizenotuCC
        +'\n'+'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'BB gelmesi için:'+this.vizenotuBB
        +'\n'+'CB gelmesi için:'+this.vizenotuBC
        +'\n'+'CC gelmesi için:'+this.vizenotuCC
        +'\n'+'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert4() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'CB gelmesi için:'+this.vizenotuBC
        +'\n'+'CC gelmesi için:'+this.vizenotuCC
        +'\n'+'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert5() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'CC gelmesi için:'+this.vizenotuCC
        +'\n'+'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert6() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'DC gelmesi için:'+this.vizenotuDC
        +'\n'+'DD gelmesi için:'+this.vizenotuDD
        +'\n'+'FD gelmesi için:'+this.vizenotuFD,
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async presentAlert7() {
    const alert = await this.alert.create({
        header: 'Sonuç',
        message:'Malesef kaldınız',
        buttons: [{
            text: 'Tamam',
            role: 'resume',
        }]
    });
    await alert.present();
  }
  async hesapla(){
    this.finalnotuetkisi=100-this.vizenotuetkisi;
    this.vizenotu2=(this.vizenotu)*(this.vizenotuetkisi)/100;
    this.vizenotuAA=(90-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuAB=(85-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuBB=(80-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuBC=(75-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuCC=(60-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuDC=(50-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuDD=(40-this.vizenotu2)/this.finalnotuetkisi*100;
    this.vizenotuFD=(35-this.vizenotu2)/this.finalnotuetkisi*100;
    if(this.vizenotuAA<=100){this.presentAlert();}
    else if(this.vizenotuAA>100 && this.vizenotuAB<=100){this.presentAlert2();}
    else if(this.vizenotuAB>100 && this.vizenotuBB<=100){this.presentAlert3();}
    else if(this.vizenotuBB>100 && this.vizenotuBC<=100){this.presentAlert4();}
    else if(this.vizenotuBC>100 && this.vizenotuCC<=100){this.presentAlert5();}
    else if(this.vizenotuCC>100 && this.vizenotuDC<=100){this.presentAlert6();}
    else{this.presentAlert7();}
      
  }
}
