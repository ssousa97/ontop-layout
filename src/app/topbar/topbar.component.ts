import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faAngleDown, faBars, faCalendar, faCreditCard, faFileLines, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @ViewChild('navList') navList!: ElementRef;

  /* font-awesome icon */
  faAngleDown = faAngleDown;
  faBars = faBars;

  toggleBurgerMenu = false;

  navItems = [
    {
      icon: faUser,
      text: 'Contracts',
      path: '/contracts'
    },
    {
      icon: faFileLines,
      text: 'Documents',
      path: '/documents'
    },
    {
      icon: faCreditCard,
      text: 'Payout',
      path: '/payout'
    },
    {
      icon: faCalendar,
      text: 'Time',
      path: '/time'
    }
  ];

  constructor(private _renderer: Renderer2) {  }

  openBurgerMenu(){

    this.toggleBurgerMenu ? 
      this._renderer.removeClass(this.navList.nativeElement, 'toggle') :
      this._renderer.addClass(this.navList.nativeElement, 'toggle')

    this.toggleBurgerMenu = !this.toggleBurgerMenu;
    
  }

}
