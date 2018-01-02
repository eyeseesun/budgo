import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BudgetProvider } from '../../providers/budget/budget';
import { Budget } from '../../interfaces/budget.interface';

/**
 * Generated class for the BudgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

	budget: Array<Budget>;
	style: Object = {
		'left': '0%'
	};
	currentView: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, private _bp: BudgetProvider) {
		this.budget = _bp.getBudget();
	}

	left(){
		if(this.currentView < this.budget.length){
			this.currentView++;
			this.style['left'] = '-' + this.currentView + '0' + this.currentView + '%';
		}
		console.log(this.style);
	}

	right(){
		if(this.currentView !== 0){
			this.currentView--;
			this.style['left'] = '-' + this.currentView + '0' + this.currentView + '%';
		}
		console.log(this.style);

	}

}
