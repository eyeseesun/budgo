import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar';
import { LogoComponent } from './logo/logo';
import { StartContainerComponent } from './start-container/start-container';
import { CreatorComponent } from './creator/creator';
import { NewbudgetComponent } from './newbudget/newbudget';
import { HomeBtnComponent } from './home-btn/home-btn';
import { InfoBtnComponent } from './info-btn/info-btn';
import { BudgetComponent } from './budget/budget';
import { BankModalComponent } from './bank-modal/bank-modal';
import { HistoryModalComponent } from './history-modal/history-modal';
import { NavFabComponent } from './nav-fab/nav-fab';
@NgModule({
	declarations: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent,
    BudgetComponent,
    BankModalComponent,
    HistoryModalComponent,
    NavFabComponent],
	imports: [],
	exports: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent,
    BudgetComponent,
    BankModalComponent,
    HistoryModalComponent,
    NavFabComponent]
})
export class ComponentsModule {}
