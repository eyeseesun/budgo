import { Component } from '@angular/core';

/**
 * Generated class for the BankModalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bank-modal',
  templateUrl: 'bank-modal.html'
})
export class BankModalComponent {

  text: string;

  constructor() {
    console.log('Hello BankModalComponent Component');
    this.text = 'Hello World';
  }

}
