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
  itemsObj: AngularFireObject<any>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  name: Array<any[]>;
  
  invoiceFormData: any[];


  constructor(db: AngularFireDatabase) {

    this.itemsRef = db.list('invoices');

    this.itemsRef.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          if (action.key == this.editInvoiceId) {
            console.log(action.payload.val());
            this.invoiceFormData = action.payload.val()
            console.log(action.payload.val());
          }
        });
      });
  };

  ngOnInit(): void {

    this.invoiceFormData = [{
      customerName: [
        {
          select_customerName: "user1",
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
          id_productID: "Product",
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


  }

  saveData(formgroups: any) {

    console.log(formgroups.issueDate.get("Issue Date").value.getFullYear().toString() + "-" +
      (formgroups.issueDate.get("Issue Date").value.getMonth() + 1).toString() + "-" +
      formgroups.issueDate.get("Issue Date").value.getDate().toString())
    console.log(formgroups.dueDate.get("Due Date").value)
    console.log(formgroups.invoiceID.value)
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

    this.itemsRef.set(this.editInvoiceId, this.invoiceFormData);
  };
}
