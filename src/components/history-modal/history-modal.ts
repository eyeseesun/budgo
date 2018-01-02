import { Component } from '@angular/core';

/**
 * Generated class for the HistoryModalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'history-modal',
  templateUrl: 'history-modal.html'
})
export class HistoryModalComponent {

  text: string;

  constructor() {
    console.log('Hello HistoryModalComponent Component');
    this.text = 'Hello World';
  }

}
