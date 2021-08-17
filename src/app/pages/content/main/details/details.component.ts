import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  //data for angular material table
  tableData: TableData[] = [];
  displayedColumns: string[] = ['index', 'firstName', 'lastName'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.setDataTableOptions();

  }
  setDataTableOptions() {
    this.tableData = this.getdata();
    this.renderTable();
  }

  getdata() {
    let data: TableData[] = [];
    for (let index = 1; index <= 100; index++) {
      data.push({ id: index, firstName: `${index} mohammed`, lastName: `${index} magdi` });
    }

    return data;
  }

  renderTable() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)
  }

  clearFilter(search: any) {
    search.value = '';
    this.dataSource.filter = search.value;
  }
}

export interface TableData {
  id: number;
  firstName: string;
  lastName: string;
}