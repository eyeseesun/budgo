import { Component } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';
import { Events, ViewController } from 'ionic-angular';

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

	budget: Array<Budget>;
	trimmedBudget: Array<Budget> = [];
	trimBy: number;

	constructor(private _bp: BudgetProvider, private events: Events, private _vc: ViewController) {
		this.budget = _bp.getBudget();

		let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

		let todaysDate = (new Date(Date.now() - tzoffset)).toISOString();
		let todaysDateStr = Date.parse(todaysDate) + (5 * (1000*3600*24)); // To spoof the date
		todaysDate = new Date(todaysDateStr - tzoffset).toISOString();
		todaysDate = todaysDate.substr(0, 11) + "00:00:00.000" + todaysDate.substr(23, todaysDate.length);

		this.trimBy = this.daysBetween(this.budget[0].date, todaysDate);

		if(this.trimBy < this.budget.length){
			for(let i = 0; i <= this.trimBy; i++){
				this.trimmedBudget.push(this.budget[i]);
			}
		} else {
			this.trimmedBudget = this.budget;
		}
	}

	refund(i: number, j: number){
		this.budget[i].spent.splice(j, 1);

		this._bp.setBudget(this.budget);
		this.events.publish('BudgetChanged' + i, { budget: i, spent: j});
	}

	convertDate(date: string){
		let monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		return (new Date(date).getDate()) + " " + (monthNames[new Date(date).getMonth()]) + " " + (new Date(date).getFullYear());
	}

	exit(){
		this._vc.dismiss();
	}

	daysBetween(date1String, date2String){
	  return Math.floor((Date.parse(date2String)-Date.parse(date1String))/(1000*3600*24));
	}

}
