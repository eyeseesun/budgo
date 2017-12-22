import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NewBudgetPage } from '../pages/new-budget/new-budget';

import { TopbarComponent } from '../components/topbar/topbar';
import { LogoComponent } from '../components/logo/logo';
import { StartContainerComponent } from '../components/start-container/start-container';
import { CreatorComponent } from '../components/creator/creator';
import { NewbudgetComponent } from '../components/newbudget/newbudget';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewBudgetPage,
    TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, { links: [] })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewBudgetPage,
    TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
