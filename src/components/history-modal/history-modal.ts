import { Component } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';
import { Events, ViewController, AlertController } from 'ionic-angular';

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
	totalSpent: number = 0.00;
	totalBudget: number = 0.00;

	constructor(private _bp: BudgetProvider, private events: Events, private _vc: ViewController, private _ac: AlertController) {
		this.budget = _bp.getBudget();
		this.totalBudget = _bp.getTotalBudget();

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

		this.updateTotalSpent();
	}

	refund(i: number, j: number){
		let spentArr = this.budget[i].spent.splice(j, 1);
		let spent = spentArr[0].amount;

		let debt = this.budget[i].debt;

		console.log(this.budget[i].debt);
		console.log(this.budget[i].paidDebt);

		if(-debt >= 0 && this.budget[i].paidDebt > 0){
			let newSpent = 0;
			for(let j = 0; j < this.budget[i].spent.length; j++){
				newSpent += this.budget[i].spent[j]['amount'];
			}
			let newAmount = this.budget[i].amount - this.budget[i].bank;
			newAmount -= newSpent;
			console.log(-(newAmount + -debt - spent));
			this._bp.addToBank(this._bp.getDebtPaid(i));
			this._bp.setDebtPaid(i, 0);

			let alert = this._ac.create({
				title: 'Debt Refund!',
				message: 'It looks like you started paying off an item you refunded. We\'ve put that money into your bank!',
				buttons: [
					{
						text: 'Okay!',
						role: 'cancel'
					}
				]
			});
			alert.present();


			if(newSpent !== 0 && newAmount <= 0){
				this._bp.setDebt(i, newAmount);
			}

			console.log(newSpent);

			if(newSpent == 0){
				this._bp.setDebt(i, 0);
			}

		} else if(spent > -debt){
			this._bp.setDebt(i, 0);
		}
		else if(spent < -debt){
			this._bp.setDebt(i, this._bp.getDebt(i) + spent);
		}

		this._bp.setBudget(this.budget);
		this.events.publish('BudgetChanged' + i, { budget: i, spent: j });

		this.totalSpent = 0;

		this.updateTotalSpent();
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

	updateTotalSpent(){
		for(let i = 0; i < this.trimmedBudget.length; i++){
			for(let j = 0; j < this.trimmedBudget[i].spent.length; j++){
				this.totalSpent += this.trimmedBudget[i].spent[j].amount;
			}
		}
	}

	spent(id: number){
		let spent = 0;
		for(let i = 0; i < this.budget[id].spent.length; i++){
			spent += this.budget[id].spent[i].amount;
		}
		return spent;
	}

}
