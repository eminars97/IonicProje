import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../../app/firebase';
import {snapshotToArray} from '../../../app/firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notekle',
  templateUrl: './notekle.page.html',
  styleUrls: ['./notekle.page.scss'],
})
export class NoteklePage implements OnInit {
  
  items;
  ref = firebase.database().ref('items');
  inputText:string='';
    constructor(private alertCtrl: AlertController) { this.ref.on('value',resp =>{
      this.items = snapshotToArray(resp)
    }) }

    addItem(item){
      if(item!==undefined && item!==null){
      let newItem = this.ref.push();
      newItem.set(item);
      this.inputText ='';
      }
    }
    async deleteNot(key){
      firebase.database().ref('items/'+key).remove();
    }

    async editNot(key){
      const alert = await this.alertCtrl.create({
        header: 'Notu Düzenle',
        inputs: [
          {
            name: 'Notlar',
            placeholder: 'Notlar'
          }
        ],
        buttons: [
          {
            text: 'İptal',
            role: 'cancel'
          },
          {
            text: 'Kaydet',
            handler: data =>{
              if(data.Notlar!==undefined && data.Notlar.length >0){
                firebase.database().ref('items/'+key).update({Notlar:data.Notlar});
              }
            }
          },
          {
            text: 'Sil',
            handler: data =>{
              firebase.database().ref('items/'+key).remove();
            }
          }

        ]
      });
     await alert.present();
    }
  ngOnInit() {
    
  }
}

