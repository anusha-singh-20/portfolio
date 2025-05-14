import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anims/img-bg-anim.json',
    loop: false,
    autoplay: true,
  };

  introTextLineHeight: string = '15px';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.introTextLineHeight = '60px';
    }, 100);
  }

  // TODOs ::::
  // change resolution of header's backgground image

  // https://www.freepik.com/free-vector/geometric-shapes-background_13453999.htm#fromView=search&page=1&position=22&uuid=70eebb0b-361c-4e75-a153-46d3c74cd3ba&query=shapes+backgrounds+png
  // https://www.freepik.com/free-vector/abstract-orange-cubes-transparent-background_1189913.htm#fromView=search&page=1&position=43&uuid=70eebb0b-361c-4e75-a153-46d3c74cd3ba&query=shapes+backgrounds+png

}
