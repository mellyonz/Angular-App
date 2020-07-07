import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'invoice-grid',
  templateUrl: './invoice-grid.component.html',
  styleUrls: ['./invoice-grid.component.scss']
})
export class InvoiceGridComponent implements OnChanges {

  name = 'not set'
  rowData
  columnDefs
  gridOptions
  isClientShown: boolean = true;

  @Input() gridData
  @Output() editGrid = new EventEmitter<Object>();

  constructor() {
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

  ngOnChanges(simples: SimpleChanges): void {
    //console.log(this.gridData)
    this.rowData = this.gridData
  }

  onCellValueChanged($event) {
    console.log($event)
    //this.editGrid.emit($event)
  };
}
