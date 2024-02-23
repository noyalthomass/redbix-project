import { Component, NgModule, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Agency, agencies } from '../../data/agency';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor() { } 
  @ViewChild(MatPaginator, {static: true}) paginator: any;

  displayedColumns = ['No', 'EstablishmentId', 'CRNumber', 'CustomerCode', 'AgencyName', 'Status', 'CreationDate', 'ClearingAgencyType'];
  pageSizeOptions=[5, 10, 20]
  
  dataSource=new MatTableDataSource<Agency>();

  ngOnInit(): void {
    this.dataSource.data = agencies
   }

   ngAfterViewInit()
   {
     this.dataSource.paginator=this.paginator;
   }

}
