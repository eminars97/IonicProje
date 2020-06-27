import { Component, OnInit } from '@angular/core';
import { SQLService } from "../../services/sql/sql.service";


@Component({
  selector: 'app-derslistele',
  templateUrl: './derslistele.page.html',
  styleUrls: ['./derslistele.page.scss'],
})
export class DerslistelePage implements OnInit {


  derslistele: any[];

  constructor(private sqlService: SQLService) {
    this.sqlService.getDbState().subscribe(ready => {
      if (ready) {
        this.getDersler();
      }
    });
   }

  ngOnInit() {
  
  }
   getDersler() {
    this.sqlService.db.executeSql('SELECT * FROM dersler').then((rs: any) => {
      this.sqlService.asArray(rs).then((list) => {
        this.derslistele = list;
        console.log(this.derslistele);
      });
    });
  }
}
