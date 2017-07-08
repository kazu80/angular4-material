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
      {name: '東京', temperature: 36, src: '../assets/image/tokyo.jpg'},
      {name: '大阪', temperature: 35, src: '../assets/image/osaka.jpg'},
      {name: '福岡', temperature: 34, src: '../assets/image/fukuoka.jpg'}
    ]
  }
}

