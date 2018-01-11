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
		
	}

	ionViewDidEnter(){
		if(this.trimBy < this.budget.length && this.trimBy >= 0){
			this.slides.slideTo(this.trimBy, 1000);
		} else if(this.trimBy >= this.budget.length) {
			this.slides.slideTo(this.budget.length - 1, 1000);
		}
	}

	convertDate(date: string){
		let monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		return (date.substr(8, 2) + " " + (monthNames[new Date(date).getMonth()]) + " " + (new Date(date).getFullYear()));
	}

	slideChanged(){
		this._bp.setActiveBudget(this.slides.getActiveIndex());
	}

	daysBetween(date1String, date2String){
	  return Math.floor((Date.parse(date2String)-Date.parse(date1String))/(1000*3600*24));
	}

}
