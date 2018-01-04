import { Component, Input } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';
import { Events } from 'ionic-angular';

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

	breakingStyle: Object;

	budget: Array<Budget> = [];
	date: string;
	amount: number;
	amountOrig: number;
	day: string;
	spend: number = 0;
	spendUpdate: number = 0;
	transName: string = '';
	placeholderTName: string = "Item or Service";
	bank: number = 0;
	bankUpdate: number = 0;
	timer;
	playing = false;
	active: Array<boolean> = [true, false];

	constructor(private _bp: BudgetProvider, private events: Events) {
		
	}

	ngOnInit(){
		this.events.subscribe('BudgetChanged' + this.bID, ()=>{
			this.budget = this._bp.getBudget();

			this.spendUpdate = 0;
			this.spend = 0;
			this.bank = 0;
			this.bankUpdate = 0;
			this.amount = this.budget[this.bID].amount;
			this.amountOrig = this.amount;
			this.bankUpdate = this.budget[this.bID].bank;

			for(let i = 0; i < this.budget[this.bID].spent.length; i++){
				this.spendUpdate += this.budget[this.bID].spent[i]['amount'];
			}

			this.amount -= this.spendUpdate;
			this.amount -= this.bankUpdate;
		});
		this.budget = this._bp.getBudget();

		let date = new Date(this.budget[this.bID].date);
		this.amount = this.budget[this.bID].amount;
		this.amountOrig = this.amount;
		this.bankUpdate = this.budget[this.bID].bank;

		for(let i = 0; i < this.budget[this.bID].spent.length; i++){
			this.spendUpdate += this.budget[this.bID].spent[i]['amount'];
		}

		this.amount -= this.spendUpdate;
		this.amount -= this.bankUpdate;

		let options = {
			year: "numeric", 
			month: "long"
		};

		this.date = date.toLocaleDateString("en-us", options);
		this.day = this.budget[this.bID].date.substring(8, 10);


		this.breakingStyle = {
			'height': (window.innerHeight * .8) + 'px'
		};
	}

	spendMoney(){
		let obj = {
			transName: this.transName,
			amount: this.spend
		};
		this.budget[this.bID].spent.push(obj);
		this.amount = this.amount - this.spend;
		this.spendUpdate += this.spend;
		console.log(this.budget[this.bID].bank);

		this._bp.setBudget(this.budget);


		this.spend = 0;
		this.transName = "";
	}

	bankMoney(){
		this.amount = this.amount - this.bank;
		this.bankUpdate += this.bank;

		this.budget[this.bID].bank += this.bank;

		this._bp.setBudget(this.budget);
		this.bank = 0;
	}

	activateTab(index: number){
		for(let i = 0; i < this.active.length; i++){
			this.active[i] = false;
		}

		this.active[index] = true;
	}

}
