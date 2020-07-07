import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-invoice-container',
  templateUrl: './invoice-container.component.html',
  styleUrls: ['./invoice-container.component.scss']
})
export class InvoiceContainerComponent implements OnInit {

  editInvoiceId = "invoice1"
  editOrderId = "order2"
  productOrderDatabase: AngularFireList<any>;
  invoicesDatabase: AngularFireList<any>;
  items: Observable<any[]>;
  name: Array<any[]>;
  
  invoiceFormData: any[];
  gridData: any[];


  constructor(db: AngularFireDatabase) {

    this.invoicesDatabase = db.list('invoices');

    this.invoicesDatabase.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          if (action.key == this.editInvoiceId) {
            //console.log(action.payload.val());
            this.invoiceFormData = action.payload.val()
            //console.log(action.payload.val());
          }
        });
      });

    this.productOrderDatabase = db.list('productOrder');
    this.changeOrder(this.editOrderId)

  };

  ngOnInit(): void {

    this.invoiceFormData = [{
       customerName: [
        {
          select_customerName: "",
          id_customerName: "",
          value_customerName: "Select a Customer"
        },
        {
          id_customerName: "user1",
          value_customerName: "User 1"
        },
        {
          id_customerName: "user2",
          value_customerName: "User 2"
        },
      ],
      invoiceID: [
        {
          id_invoiceID: "Invoice ID",
          value_invoiceID: "IV00000000893"
        },
      ],
      productID: [
        {
          select_productID: "order1",
          id_customerName: "",
          value_productID: "Select a Customer"
        },
        {
          id_productID: "order1",
          value_productID: "Product Order 1"
        },
        {
          id_productID: "order2",
          value_productID: "Product Order 2"
        },
      ],
      issueDate: [
        {
          id_issueDate: "Issue Date",
          value_issueDate: "2020-5-16"
        },
      ],
      dueDate: [
        {
          id_dueDate: "Due Date",
          value_dueDate: "2020-06-17"
        },
      ],
      notes: [
        {
          id_notes: "Notes",
          value_notes: ""
        },
      ],
    }]

    this.gridData = [
      {
        id_item: "engine1",
        Item: "Engine",
        Description: "Part of a car",
        Vehicle: "Shevy",
        Units: 1,
        Price: 1000,
        Total: 1000,
      },
      {
        id_item: "engine1",
        Item: "Engine",
        Description: "Part of a car",
        Vehicle: "Shevy",
        Units: 1,
        Price: 1000,
        Total: 1000,
      },
      {
        id_item: "engine1",
        Item: "Engine",
        Description: "Part of a car",
        Vehicle: "Shevy",
        Units: 1,
        Price: 1000,
        Total: 1000,
      },
    ]

  }

  changeOrder(orderID) {

    this.productOrderDatabase.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          if (action.key == orderID) {
            console.log(action.payload.val());
            this.gridData = action.payload.val()
            console.log(action.payload.val());
          }
        });
      });
  }

  changeOrderData(event) {
    this.gridData[event.rowIndex] = event.data
  }

  saveData(formgroups: any) {
    /*console.log(formgroups.issueDate.get("Issue Date").value.getFullYear().toString() + "-" +
      (formgroups.issueDate.get("Issue Date").value.getMonth() + 1).toString() + "-" +
      formgroups.issueDate.get("Issue Date").value.getDate().toString())
    console.log(formgroups.dueDate.get("Due Date").value)
    console.log(formgroups.invoiceID.value)*/
    this.invoiceFormData[0].customerName[0] = formgroups.customerName.value

    this.invoiceFormData[0].invoiceID[0].value_invoiceID = formgroups.invoiceID.get("Invoice ID").value

    this.invoiceFormData[0].issueDate[0].value_issueDate =
      formgroups.issueDate.get("Issue Date").value.getFullYear().toString() + "-" +
      (formgroups.issueDate.get("Issue Date").value.getMonth() + 1).toString() + "-" +
      formgroups.issueDate.get("Issue Date").value.getDate().toString()

    this.invoiceFormData[0].dueDate[0].value_dueDate =
      formgroups.dueDate.get("Due Date").value.getFullYear().toString() + "-" +
      (formgroups.dueDate.get("Due Date").value.getMonth() + 1).toString() + "-" +
      formgroups.dueDate.get("Due Date").value.getDate().toString()

    this.invoicesDatabase.set(this.editInvoiceId, this.invoiceFormData);
    this.productOrderDatabase.set(this.editOrderId, this.gridData);
  };
}
