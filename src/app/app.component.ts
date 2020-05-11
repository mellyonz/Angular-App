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
  item = 'test'

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('clients');
    this.itemRef.snapshotChanges().subscribe(action => {
      console.log(action.payload.val());
      console.log(action.key);
      this.item = action.payload.val()[1]['name'].toString();
      console.log(this.item)
    });
  }



  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: this.item, model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

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
