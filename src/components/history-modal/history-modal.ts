import { Component } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';
import { Events } from 'ionic-angular';

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

	budgets: Array<Budget>;

	constructor(private _bp: BudgetProvider, private events: Events) {
		this.budgets = _bp.getBudget();
	}

	refund(i: number, j: number){
		this.budgets[i].spent.splice(j, 1);

		this._bp.setBudget(this.budgets);
		this.events.publish('BudgetChanged' + i, { budget: i, spent: j});
	}

	convertDate(date: string){
		let monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		return (new Date(date).getDate()) + " " + (monthNames[new Date(date).getMonth()]) + " " + (new Date(date).getFullYear());
	}

}
