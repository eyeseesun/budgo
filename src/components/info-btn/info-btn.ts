import { Component } from '@angular/core';

/**
 * Generated class for the InfoBtnComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'info-btn',
  templateUrl: 'info-btn.html'
})
export class InfoBtnComponent {

  text: string;

  constructor() {
    console.log('Hello InfoBtnComponent Component');
    this.text = 'Hello World';
  }

}
