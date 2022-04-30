import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  client = 'Client';
  
  displayColumns = [
    {
      value: 'contractor-name',
      text: 'Contractor name'
    },
    {
      value: 'type',
      text: 'Type'
    },
    {
      value: 'start-date',
      text: 'Start date'
    },
    {
      value: 'amount',
      text: 'Amount'
    },
    {
      value: 'status',
      text: 'Status'
    },
    {
      value: 'actions',
      text: 'Actions'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
