import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NewBudgetPage } from '../../pages/new-budget/new-budget';
import { BudgetPage } from '../../pages/budget/budget';
import { BudgetProvider } from '../../providers/budget/budget';

/**
 * Generated class for the StartContainerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'start-container',
  templateUrl: 'start-container.html'
})
export class StartContainerComponent {

	currentBudget: boolean = true;

	constructor(private _nc: NavController, private _bp: BudgetProvider, private events: Events) {
		
	}

	ngOnInit(){
		this.events.subscribe('CurrentBudget', ()=>{
			this.currentBudget = false;
		});
	}

	goToCurrentBudget(){
		this._nc.push(BudgetPage);
	}

	makeNewBudget(){
		this._nc.push(NewBudgetPage);
	}

}
