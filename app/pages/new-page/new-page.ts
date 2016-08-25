import { Component } from '@angular/core';
import { NewComponent} from '../../components/new-component/new-component';
import {NewPipe} from '../../pipes/NewPipe';
import {NewProvider} from '../../providers/new-provider/new-provider';
import {SecondPagePage} from '../../pages/second-page/second-page';
import { NavController,NavParams} from 'ionic-angular';

/*
  Generated class for the NewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/new-page/new-page.html',
  directives:[NewComponent],
  pipes:[NewPipe],
  providers:[NewProvider]
})
export class NewPage {
  someValue: string;

  username:string;
  password:string;

  constructor(public newProvider: NewProvider,public nav: NavController,navParams:NavParams) {
      this.newProvider.load().then((data) => {
          console.log(data);
      });
      this.someValue = "hello";
  }
  openSecond() {
      this.nav.push(SecondPagePage,{
        name:'张三',
        age:'18'
      });
  }

  login() {
      console.log(this.username);
      console.log(this.password);
  }
}
