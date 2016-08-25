import { Component } from '@angular/core';

/*
  Generated class for the NewComponent component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'new-component',
  templateUrl: 'build/components/new-component/new-component.html'
})
export class NewComponent {

  text: string;
  description: string;

  constructor() {
    this.text = 'Hello World';
    this.description = "这是一个新添加的组件";
  }
}
