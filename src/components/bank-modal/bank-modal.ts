import { Component } from '@angular/core';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';
import { NavController, Events } from 'ionic-angular';

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

	budget: Array<Budget>;
	id: number = 0;
	banked: number = 0;

	constructor(private _bp: BudgetProvider, private _nc: NavController, private events: Events) {	
		this.budget = _bp.getBudget();
		this.id = _bp.getActiveBudget();

		for(let i = 0; i < this.budget.length; i++){
			this.banked += this.budget[i].bank;
		}
	}

	exit(){
		this._nc.pop();
	}

	withdrawAll(){
		for(let i = 0; i < this.budget.length; i++){
			if(this.budget[i].bank > 0){
				this.budget[i].amount -= this.budget[i].bank;
			}
			this.budget[i].bank = 0;
			console.log(this.budget[i]);
		}
		this.budget[this.id].amount += this.banked;
		this._bp.setBudget(this.budget);
		for(let i = 0; i < this.budget.length; i++){
			this.events.publish('BudgetChanged' + i);
		}
		this._nc.pop();
	}

}
