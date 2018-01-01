import { Component } from '@angular/core';

/**
 * Generated class for the SpendModalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'spend-modal',
  templateUrl: 'spend-modal.html'
})
export class SpendModalComponent {

  text: string;

  constructor() {
    console.log('Hello SpendModalComponent Component');
    this.text = 'Hello World';
  }

}
