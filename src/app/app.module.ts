import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgFor, NgClass, NgIf, NgStyle } from '@angular/common';
import { NgModel } from '@angular/forms';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { HomePage } from '../pages/home/home';
import { NewBudgetPage } from '../pages/new-budget/new-budget';
import { BudgetPage } from '../pages/budget/budget';

import { TopbarComponent } from '../components/topbar/topbar';
import { LogoComponent } from '../components/logo/logo';
import { StartContainerComponent } from '../components/start-container/start-container';
import { CreatorComponent } from '../components/creator/creator';
import { NewbudgetComponent } from '../components/newbudget/newbudget';
import { BudgetComponent } from '../components/budget/budget';
import { InfoBtnComponent } from '../components/info-btn/info-btn';
import { BankModalComponent } from '../components/bank-modal/bank-modal';
import { HistoryModalComponent } from '../components/history-modal/history-modal';
import { NavFabComponent } from '../components/nav-fab/nav-fab';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { BudgetProvider } from '../providers/budget/budget';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewBudgetPage,
    BudgetPage,
    TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    BudgetComponent,
    InfoBtnComponent,
    BankModalComponent,
    HistoryModalComponent,
    NavFabComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { scrollPadding: false, scrollAssist: false, autoFocusAssist: false }, { links: [] }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewBudgetPage,
    BudgetPage,
    TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    BudgetComponent,
    InfoBtnComponent,
    BankModalComponent,
    HistoryModalComponent,
    NavFabComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BudgetProvider
  ]
})
export class AppModule { }
