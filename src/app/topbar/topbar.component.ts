import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleDown, faBars, faCalendar, faCreditCard, faFileLines, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  /* font-awesome icon */
  faAngleDown = faAngleDown;
  faBars = faBars;

  navItems = [
    {
      icon: faUser,
      text: 'Contracts',
      path: '/'
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


  

}
