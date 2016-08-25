import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListService} from '../../providers/new-provider/new-provider';
/*
  Generated class for the LotteryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/lottery/lottery.html',
  providers:[ListService]
})
export class LotteryPage {
  items: Array<{activityNum: string, lotteryTime: string, prizeCode: string,prizeNum: string,winnerCode: string}>;
  constructor(public listService: ListService ,private nav: NavController) {
    this.listService.load().then((data) => {
        console.log(data);
        this.items = data.body.rewardActivityInfo;
    });
  }

}
