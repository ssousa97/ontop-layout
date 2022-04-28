import { Component, OnInit } from '@angular/core';
import { faAngleDown, faBars, faCalendar, faCreditCard, faFileLines, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  /* icons */
  faUser = faUser;
  faDocuments = faFileLines;
  faPayout = faCreditCard;
  faTime = faCalendar;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
