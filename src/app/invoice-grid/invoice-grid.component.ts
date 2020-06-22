import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'invoice-grid',
  templateUrl: './invoice-grid.component.html',
  styleUrls: ['./invoice-grid.component.scss']
})
export class InvoiceGridComponent implements OnInit {

  name = 'not set'
  rowData
  columnDefs
  gridOptions
  isClientShown: boolean = true;

  @Input() gridData
  @Output() addData = new EventEmitter<Object>();

  constructor() {
    this.rowData = [
      {
        Item: 'h',
        Description: 'Harrison',
        Vehicle: 'Male',
        Units: 3,
        Price: 30,
        Total: 'Ireland',
      },
    ]
    this.gridOptions = {
      columnDefs: [
        { field: 'Item' },
        { field: 'Description' },
        { field: 'Vehicle' },
        { field: 'Units' },
        { field: 'Price' },
        { field: 'Total' },
      ],
      defaultColDef: {
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
      },
      animateRows: true,
      getRowNodeId: function (data) {
        return data.id;
      },
      rowData: this.rowData,
    };
  };

  ngOnInit(): void {




  }

  onCellClicked($event: CellClickedEvent) {
    this.isClientShown = !this.isClientShown;
  };
}
