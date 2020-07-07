import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnChanges {

  customerName = new FormGroup({})
  invoiceID = new FormGroup({})
  productID = new FormGroup({})
  issueDate = new FormGroup({})
  dueDate = new FormGroup({})
  notes = new FormGroup({})

  @Input() grid
  @Input() invoiceFormData
  @Output() updateGrid = new EventEmitter<Object>();
  @Output() saveInvoice = new EventEmitter<Object>();

  days = [7, 14, 21, 28, 29, 30, 31];
  selected =  new FormControl();

  ngOnChanges(simples: SimpleChanges): void {
    this.selected = new FormControl(this.invoiceFormData[0].customerName[0].select_customerName)

    //console.log(this.invoiceFormData[0])

    this.customerName.setControl("select_customerName", this.selected)

    this.invoiceID.setControl(this.invoiceFormData[0].productID[0].id_productID,
      new FormControl(this.invoiceFormData[0].productID[0].value_productID))    

    this.invoiceID.setControl(this.invoiceFormData[0].invoiceID[0].id_invoiceID,
      new FormControl({ value: this.invoiceFormData[0].invoiceID[0].value_invoiceID, disabled: true }))    

    this.issueDate.setControl(this.invoiceFormData[0].issueDate[0].id_issueDate,
      new FormControl(new Date(this.invoiceFormData[0].issueDate[0].value_issueDate))); //this.invoiceFormData[0].dueDate[0].value_issueDate

    this.dueDate.setControl(this.invoiceFormData[0].dueDate[0].id_dueDate,
      new FormControl(new Date(this.invoiceFormData[0].dueDate[0].value_dueDate)));

    this.notes.setControl(this.invoiceFormData[0].notes[0].id_notes,
      new FormControl(this.invoiceFormData[0].notes[0].value_notes, Validators.pattern('^[a-zA-Z0-9. ,]*')))
  }

  onProductOrderSel(event) {
    console.log(event)
    this.updateGrid.emit(event.value)
  }

  setDueDate(day) {
    //console.log(this.issueDate.get("Issue Date").value)
    this.invoiceFormData[0].dueDate[0].value_dueDate = new Date(this.issueDate.get("Issue Date").value)
    //console.log( this.invoiceFormData[0].dueDate[0].value_dueDate)
    this.invoiceFormData[0].dueDate[0].value_dueDate.setDate(this.issueDate.get("Issue Date").value.getDate() + day)
    //console.log(this.invoiceFormData[0].dueDate[0].value_dueDate)
    this.dueDate.patchValue({ "Due Date": this.invoiceFormData[0].dueDate[0].value_dueDate })
  }


  onSubmit() {
    //console.log(this.customerName)
    console.log(this.invoiceID)
    console.log(this.productID)
    console.log(this.issueDate)
    console.log(this.dueDate)
    console.log(this.customerName)
    let formgroups = new Object({
      customerName: this.customerName,
      invoiceID: this.invoiceID,
      productID: this.productID,
      issueDate: this.issueDate,
      dueDate: this.dueDate,
      notes: this.notes,
    })
    this.saveInvoice.emit(formgroups)
  }
}
