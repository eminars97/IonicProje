import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AlertController, NavController, ToastController} from '@ionic/angular';
import { SQLService } from "../../services/sql/sql.service";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.page.html',
  styleUrls: ['./dersler.page.scss'],
})
export class DerslerPage implements OnInit {

  dersadi: string;
  vizenotu: number;
  finalnotu: number;
  derskredi: number;
  constructor(private navCtrl: NavController,
              private alertController: AlertController,
              private sqlService: SQLService
              ) { }

  ngOnInit() {
  }
  uploadDersler() {
    this.sqlService.db.executeSql('INSERT INTO dersler (dersadi, vizenotu, finalnotu,kredi) VALUES ('+this.dersadi+','+this.vizenotu+','+this.finalnotu+','+this.derskredi+')');
}
}
