import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleDown, faBars, faCalendar, faCreditCard, faFileLines, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  /* icons */
  faUser = faUser;
  faDocuments = faFileLines;
  faPayout = faCreditCard;
  faTime = faCalendar;
  faAngleDown = faAngleDown;
  faBars = faBars;

  navListIsToggled = false;

  ngAfterViewInit(){
    let burgerMenu = document.getElementById('burger-menu') as HTMLElement;
    burgerMenu.addEventListener('click', ()=> {
      let navList = document.getElementById('nav-list') as HTMLElement;

      if(this.navListIsToggled) {
        navList.classList.remove('toggle-on');
        navList.classList.add('toggle-off');
      } else {
        navList.classList.add('toggle-on');
        navList.classList.remove('toggle-off');
      }
      this.navListIsToggled = !this.navListIsToggled;

    });
  }

}
