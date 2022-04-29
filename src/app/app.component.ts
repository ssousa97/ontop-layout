import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _responsive: BreakpointObserver) {}

  ngOnInit(){

    this._responsive.observe(Breakpoints.Small).subscribe(result => {
      if(result.matches){
        console.log(result.breakpoints);
        
      }
    })
    

  }

}
