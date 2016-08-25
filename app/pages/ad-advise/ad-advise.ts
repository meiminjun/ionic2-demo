import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LotteryPage } from '../../pages/lottery/lottery';
/*
  Generated class for the AdAdvisePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/ad-advise/ad-advise.html',
})
export class AdvisePage {

  constructor(public nav: NavController) {

  }
  toLottery() {
      this.nav.push(LotteryPage);
  }
}
