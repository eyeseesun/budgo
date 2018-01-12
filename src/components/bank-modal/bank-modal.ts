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
	withdraw: number = 0;

	constructor(private _bp: BudgetProvider, private _nc: NavController, private events: Events) {	
		this.budget = _bp.getBudget();
		this.id = _bp.getActiveBudget();

		this.banked = this._bp.getBanked();

		this._bp.setBanked(this.banked);
	}

	exit(){
		this._nc.pop();
	}

	withdrawSpec(){
		this.banked -= this.withdraw;
		this.budget[this.id].amount += this.withdraw;
		this._bp.setBudget(this.budget);
		this._bp.setBanked(this.banked);
		for(let i = 0; i < this.budget.length; i++){
			this.events.publish('BudgetChanged' + i);
		}
		this.withdraw = 0;
		this._nc.pop();
	}

	withdrawAll(){
		for(let i = 0; i < this.budget.length; i++){
			if(this.budget[i].bank > 0){
				this.budget[i].amount -= this.budget[i].bank;
			}
			this.budget[i].bank = 0;
		}
		this.budget[this.id].amount += this.banked;
		this._bp.setBudget(this.budget);
		for(let i = 0; i < this.budget.length; i++){
			this.events.publish('BudgetChanged' + i);
		}
		this._nc.pop();
	}

}
