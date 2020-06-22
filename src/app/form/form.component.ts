import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'form-template',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  businessName = new FormGroup({})
  fullName = new FormGroup({})
  email = new FormGroup({})
  address = new FormGroup({})
  number = new FormGroup({})
  website = new FormGroup({})
  gst = new FormGroup({})
  notes = new FormGroup({})

  @Input() formData
  @Output() addData = new EventEmitter<Object>();


  ngOnChanges(simples: SimpleChanges): void {
    this.businessName = new FormGroup({})
    this.fullName = new FormGroup({})
    this.email = new FormGroup({})
    this.address = new FormGroup({})
    this.number = new FormGroup({})
    this.website = new FormGroup({})
    this.gst = new FormGroup({})
    this.notes.reset()

    this.formData.forEach(formGroup => {

      formGroup.businessName.forEach(form => {
        this.businessName.addControl(form.id_businessName, new FormControl(form.value_businessName, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_$@&.,:; -]*')
        ])))
      });

      formGroup.fullName.forEach(form => {
        this.fullName.addControl(form.id_firstName, new FormControl(form.value_firstName, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]*')
        ])))
        this.fullName.addControl(form.id_lastName, new FormControl(form.value_lastName, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]*')
        ])))
      });

      formGroup.email.forEach(form => {
        this.email.addControl(form.id_email, new FormControl(form.value_email, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{1,3}')
        ])))
      });

      formGroup.address.forEach(form => {
        this.address.addControl(form.id_address, new FormControl(form.value_address, Validators.pattern('^[a-zA-Z0-9 .]*')))
        this.address.addControl(form.id_city, new FormControl(form.value_city, Validators.pattern('^[a-zA-Z]*')))
        this.address.addControl(form.id_postalCode, new FormControl(form.value_postalCode, Validators.compose([
          Validators.pattern('^[0-9]*'),
          Validators.minLength(4),
          Validators.maxLength(4)
        ])))
      });

      formGroup.number.forEach(form => {
        this.number.addControl(form.id_number, new FormControl(form.value_number, Validators.compose([
          Validators.pattern('^[0-9+() ]*'),
          Validators.minLength(8),
          Validators.maxLength(15)
        ])))
      });

      formGroup.website.forEach(form => {
        this.website.addControl(form.id_website, new FormControl(form.value_website, Validators.pattern('^[a-zA-Z0-9.-]*')))
      });

      formGroup.gst.forEach(form => {
        this.gst.addControl(form.id_gst, new FormControl(form.value_gst, Validators.pattern('^[0-9]*')))
      });

      formGroup.notes.forEach(form => {
        this.notes.addControl(form.id_notes, new FormControl(form.value_notes, Validators.pattern('^[a-zA-Z0-9. ]*')))
      });
    });
  }
  

  onSubmit() {
    let formgroups = new Object({
      businessName: this.businessName,
      fullName: this.fullName,
      email: this.email,
      address: this.address,
      number: this.number,
      website: this.website,
      gst: this.gst,
      notes: this.notes
    })
    this.addData.emit(formgroups)
  }
}
