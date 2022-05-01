import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';
import { lastValueFrom } from 'rxjs';
import { ContractsInterface, ContractsResponseInterface, ContractsStatusEnum, ContractsTypeEnum } from './contracts.interface';

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
  contracts!: ContractsInterface[];
  dataSource!: MatTableDataSource<ContractsInterface>;

  displayedColumns = [
    {field : 'contractorName', label : 'Contractor name'},
    {field : 'type', label : 'Type'},
    {field : 'startDate', label : 'Start date'},
    {field : 'amount', label : 'Amount'},
    {field : 'status', label : 'Status'},
  ];
  columnsProps: string[];
  
  contractsType: [string, ContractsTypeEnum][];
  contractsStatus: [string, ContractsStatusEnum][];

  constructor(private _http: HttpClient){

    this.columnsProps = this.displayedColumns.map(column => column.field);
    this.contractsType = Object.entries(ContractsTypeEnum);    
    this.contractsStatus = Object.entries(ContractsStatusEnum);
    this.dataSource = new MatTableDataSource<ContractsInterface>();
  }

  async ngAfterViewInit(){

    let contractsResponse = await lastValueFrom(this._http.get('assets/json/contracts.json')) as ContractsResponseInterface;

    this.client = contractsResponse.client;
    this.contracts = contractsResponse.contractors;
    
    this.dataSource.data = this.contracts;
    this.dataSource.paginator = this.paginator;
  }

}
