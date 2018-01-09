import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events } from 'ionic-angular';
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
	@ViewChild(Slides) slides: Slides;
	budget: Array<Budget>;
	trimmedBudget: Array<Budget> = [];
	trimBy: number;
	style: Object = {
		'left': '0%'
	};
	currentView: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, private _bp: BudgetProvider, private events: Events) {
		this.budget = _bp.getBudget();

		let todaysDate = new Date().toISOString();

		this.trimBy = this.daysBetween(this.budget[0].date, todaysDate);

		for(let i = 0; i <= this.trimBy; i++){
			this.trimmedBudget.push(this.budget[i]);
		}

		console.log(this.trimmedBudget);
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

	convertDate(date: string){
		let monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		return (new Date(date).getDate()) + " " + (monthNames[new Date(date).getMonth()]) + " " + (new Date(date).getFullYear());
	}

	slideChanged(){
		this._bp.setActiveBudget(this.slides.getActiveIndex());
	}

	daysBetween(date1String, date2String){
	  return Math.floor((Date.parse(date2String)-Date.parse(date1String))/(1000*3600*24));
	}

}
