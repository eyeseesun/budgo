import { Component } from '@angular/core';

/**
 * Generated class for the HomeBtnComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home-btn',
  templateUrl: 'home-btn.html'
})
export class HomeBtnComponent {

  text: string;

  constructor() {
    console.log('Hello HomeBtnComponent Component');
    this.text = 'Hello World';
  }

}
