import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { lastValueFrom, startWith } from 'rxjs';
import { ContractorInterface, ContractsResponseInterface, ContractsStatusEnum, ContractsTypeEnum } from './contracts.interface';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /*icons*/
  faSliders = faSliders;
  faPlus = faPlus;

  client!: string;
  contracts!: ContractorInterface[];
  dataSource!: MatTableDataSource<ContractorInterface>;

  contractsType: {key: string, val: any}[];
  contractsStatus: {key: string, val: any}[];

  displayedColumns = [
    {field : 'contractorName', label : 'Contractor name'},
    {field : 'type', label : 'Type'},
    {field : 'startDate', label : 'Start date'},
    {field : 'amount', label : 'Amount'},
    {field : 'status', label : 'Status'},
    {field : 'actions', label : 'Actions'}
  ];
  columnsProps: string[];
  
  constructor(private _http: HttpClient){

    this.columnsProps = this.displayedColumns.map(column => column.field);

    this.contractsType = this.enumToObjectArray(ContractsTypeEnum)
    this.contractsStatus = this.enumToObjectArray(ContractsStatusEnum)
    
    this.dataSource = new MatTableDataSource<ContractorInterface>();
  }

  async ngAfterViewInit(){

    let contractsResponse = await lastValueFrom(this._http.get('assets/json/contracts.json')) as ContractsResponseInterface;

    contractsResponse.contractors.forEach(contractor => 
      Object.assign(contractor, {'actions' : ['edit', 'sign', 'summary', 'delete']})
    );

    this.client = contractsResponse.client;
    this.contracts = contractsResponse.contractors;
    
    this.dataSource.data = this.contracts;
    this.dataSource.paginator = this.paginator;
  }

  applyCss(element : ContractorInterface, field: string){
    
    switch(field){

      case 'status': 
        return element.status === ContractsStatusEnum.active.toLowerCase() ? 'status-field-active' : 'status-field-pending'
        
    }    
    return '';
  }

  formatInput(field:string, input: string){
  
    switch(field) {
      case 'status': return this.contractsStatus.filter((obj) => obj.key === input)[0].val;
      case 'type'  : return this.contractsType.filter((obj) => obj.key === input)[0].val;
      case 'startDate': return moment(input).format('MMM D YYYY').toString();
      case 'amount': return `$${input} USD`;
    }
    return input;
  }

  private enumToObjectArray<T>(_enum: T){
    return Object.entries(_enum).map(([key, val]) => ({key, val}))
  }

}

