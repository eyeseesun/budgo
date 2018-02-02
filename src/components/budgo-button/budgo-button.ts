import { Component, Input, AfterViewInit } from '@angular/core';
import { TweenMax } from "gsap";
import * as $ from 'jquery';

/**
 * Generated class for the BudgoButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'budgo-button',
  templateUrl: 'budgo-button.html'
})
export class BudgoButtonComponent {

  @Input() text: string = "Button";
  @Input("id") btnID: string = "btnID";
  @Input() disable: boolean = false;

  ngAfterViewInit(){

  	let btn = $('#' + this.btnID);

  	btn.click(()=>{
  		TweenMax.to(btn, .05, {right: 4, top: 4, boxShadow: "0px 0px rgba(0,0,0,0.1)"});
  		TweenMax.to(btn, .05, {right: 0, top: 0, boxShadow: "5px 5px rgba(0,0,0,0.1)", delay: .1});
  	});

  }

}
