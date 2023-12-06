import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  likes:number=0
  addLikes(){
    this.likes++
  }

  deslikes:number=0
  addDeslikes(){
    this.deslikes++
  }

  constructor() {}

}
