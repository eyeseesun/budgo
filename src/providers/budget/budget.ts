import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Budget } from '../../interfaces/budget.interface';

/*
  Generated class for the BudgetProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BudgetProvider {

	budget: Array<Budget>;

	constructor(public http: Http, private _storage: Storage) {
		_storage.get('budget').then((val) => {
			if(val){
				this.budget = val;
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

}
