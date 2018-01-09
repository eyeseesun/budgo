import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BudgetPage } from '../../pages/budget/budget';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';

/**
 * Generated class for the NewbudgetComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'newbudget',
  templateUrl: 'newbudget.html'
})
export class NewbudgetComponent {

	money: number = 70;
	startDate: string;
	endDate: string;
	currentDate: string;
	budget: Array<number> = [];
	dailyBudget: Array<Budget> = [];

	constructor(private _nc: NavController, private _bp: BudgetProvider) {

		let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

		this.startDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
		let e1 = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
		let e2 = Date.parse(e1) + (6 * (1000*3600*24));
		this.endDate = new Date(e2 - tzoffset).toISOString();

		this.currentDate = this.startDate;
	}

	submit(){
		let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

		console.log("Counting for this many days" + (this.daysBetween(this.startDate, this.endDate) + 2));

		let dailyAmount = this.money / (this.daysBetween(this.startDate, this.endDate) + 2);
		let startAmount = dailyAmount;
		let daysBetween = this.daysBetween(this.startDate, this.endDate) + 1;

		console.log("The Daily Seed: " + dailyAmount);
		
		for(let i = 0; i < daysBetween + 1; i++){
			let r = Math.random() * dailyAmount;
			let leftOver = dailyAmount - parseFloat(r.toFixed(2));
			dailyAmount = startAmount + parseFloat(leftOver.toFixed(2));
			this.budget.push(parseFloat(r.toFixed(2)));
		}

		let leftOver = this.money - parseFloat(this.sumAll(this.budget));
		let divided = leftOver / daysBetween;

		for(let i = 0; i < this.budget.length; i++){
			this.budget[i] += divided;
		}

		let budgetObj: Budget;

		for(let i = 0; i < this.budget.length; i++){
			budgetObj = {
				date: new Date(Date.parse(this.startDate) - tzoffset + (i * (1000*3600*24))).toISOString(),
				amount: parseFloat(this.budget[i].toFixed(2)),
				spent: [],
				bank: 0
			}
			this.dailyBudget.push(budgetObj);
		}

		this._bp.setBudget(this.dailyBudget);

		console.log(this.dailyBudget);

		this._nc.push(BudgetPage);
	}

	daysBetween(date1String, date2String){
	  return Math.floor((Date.parse(date2String)-Date.parse(date1String))/(1000*3600*24));
	}

	sumAll(arr: Array<number>){
		let sum = 0;
		for(let i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum.toFixed(2);
	}

	onChange(e){

		if(this.daysBetween(this.startDate, this.endDate) < 0){
			this.endDate = this.startDate;
		}
		
	}

}
