import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Budget } from '../../interfaces/budget.interface';
import { Events } from 'ionic-angular';

/*
  Generated class for the BudgetProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BudgetProvider {

	budget: Array<Budget>;
	activeBudget: number = 0;
	banked: number = 0;
	totalBudget: number = 0;

	constructor(public http: Http, private _storage: Storage, private events: Events) {
		_storage.get('budget').then((val) => {
			if(val){
				this.budget = val;
				this.events.publish('CurrentBudget', true);
			}
		});
		_storage.get('banked').then((val)=>{
			if(val || val == 0){
				this.banked = val;
				this.events.publish('Banked', true);
			}
		});
		_storage.get('totalBudget').then((val)=>{
			if(val){
				this.totalBudget = val;
				this.events.publish('totalBudget', true);
			}
		});
	}

	setBudget(arr: Array<Budget>){
		this.budget = arr;
		this._storage.set('budget', this.budget);
	}

	getBudget(){
		return this.budget;
	}

	setActiveBudget(id: number){
		this.activeBudget = id;
	}

	getActiveBudget(){
		return this.activeBudget;
	}

	setBanked(amount: number){
		this.banked = amount;
		this._storage.set('banked', this.banked);
	}

	addToBank(amount: number){
		this.banked += amount;
		this._storage.set('banked', this.banked);
	}

	getBanked(){
		return this.banked;
	}

	setTotalBudget(amount: number){
		this.totalBudget = amount;
		this._storage.set('totalBudget', this.totalBudget);
	}

	getTotalBudget(){
		return this.totalBudget;
	}

}
