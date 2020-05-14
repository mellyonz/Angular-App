import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CellClickedEvent } from 'ag-grid-community';

import { FormGroup, FormControl } from '@angular/forms';



class Apps {
  constructor(public title) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  itemRef: AngularFireObject<any>;
  items: Observable<any[]>;
  name = 'not set'

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  rowData = [
    { name: this.name }
  ];

  gridOptions = {
    columnDefs: [
        { headerName: 'Name', field: 'name' }
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

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('clients');
    this.itemRef.snapshotChanges().subscribe(action => {
      //console.log(action.payload.val());
      console.log(action.key);
      this.name = action.payload.val()[1]['name'].toString();
      console.log(this.name);
      this.rowData = [
        { name: this.name }
      ];
    });
  };


  rowData2 = [
    { make: 'Test2', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  isClientShown: boolean = true;
  isCustomerShown: boolean = false;

  onCellClicked($event: CellClickedEvent) {
    this.isClientShown = !this.isClientShown;
    this.isCustomerShown = !this.isCustomerShown; };
}
