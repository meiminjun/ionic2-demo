import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the SecondPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/second-page/second-page.html',
})
export class SecondPagePage {
  name: string;
  age: string;
  constructor(private nav: NavController,navParams: NavParams) {
      this.name = navParams.get('name');
      this.age = navParams.get('age');
  }

  backToPage() {
      this.nav.pop();
  }

}
