import {Component, OnInit} from '@angular/core';
import 'hammerjs';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any[];

  ngOnInit() {
    this.items = [
      {name: '東京', temperature: 36},
      {name: '大阪', temperature: 35},
      {name: '福岡', temperature: 34}
    ]
  }
}

