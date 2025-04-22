import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  introTextLineHeight: string = '15px';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.introTextLineHeight = '60px';
    }, 100);
  }

}
