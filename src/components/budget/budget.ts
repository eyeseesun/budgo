import { Component, Input } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';

/**
 * Generated class for the BudgetComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'budget',
  templateUrl: 'budget.html'
})
export class BudgetComponent {

	@Input() bID: number;

	budget: Array<Budget> = [];
	date: string;
	amount: number;
	amountOrig: number;
	day: string;
	spend: number = 0;
	spendUpdate: number = 0;
	bank: number = 0;
	bankUpdate: number = 0;
	timer;
	playing = false;

	constructor(private _bp: BudgetProvider) {
		
	}

	ngOnInit(){
		this.budget = this._bp.getBudget();

		let date = new Date(this.budget[this.bID].date);
		this.amount = this.budget[this.bID].amount;
		this.amountOrig = this.amount;

		let options = {
			year: "numeric", 
			month: "long"
		};

		this.date = date.toLocaleDateString("en-us", options);
		this.day = this.budget[this.bID].date.substring(8, 10);


		console.log(this.bID);
	}

	spendMoney(){
		this.amount = this.amount - this.spend;
		this.spendUpdate += this.spend;
		this.spend = 0;
	}

	bankMoney(){
		this.amount = this.amount - this.bank;
		this.bankUpdate += this.bank;
		this.bank = 0;
	}

}
