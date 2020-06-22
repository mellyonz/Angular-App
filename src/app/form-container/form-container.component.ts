import { Component, OnInit} from '@angular/core';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  
  requiredForm = 'business'
  editFormId = "user2"
  itemsObj: AngularFireObject<any>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  name: Array<any[]>;
  formData: any[];

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('clients');
    this.itemsObj = db.object('clients');
    this.itemsObj.snapshotChanges().subscribe(value => {
      //console.log(action.payload.val());
      this.name = value.payload.val()[this.editFormId]
      console.log(this.formData);
      this.formData = this.name
      console.log(this.formData);
    });
  };

  ngOnInit() {
    this.formData = [{
      businessName: [
        {
          id_businessName: "Business Name",
          value_businessName: "test"
        },
        {
          id_businessName: "Trade Name",
          value_businessName: "test2"
        }
      ],
      fullName: [
        {
          id_firstName: "FirstName",
          value_firstName: "test_first",
          id_lastName: "LastName",
          value_lastName: "test_last"
        },
      ],
      email: [
        {
          id_email: "Email",
          value_email: "test"
        },
      ],
      address: [
        {
          id_address: "Address",
          value_address: "test_first",
          id_city: "City",
          value_city: "test_last",
          id_postalCode: "PostalCode",
          value_postalCode: "test_last",
        },
      ],
      number: [
        {
          id_number: "number",
          value_number: "test",
        },
      ],
      website: [
        {
          id_website: "website",
          value_website: "test",
        },
      ],
      gst: [
        {
          id_gst: "gst",
          value_gst: "test",
        },
      ],
      notes: [
        {
          id_notes: "notes",
          value_notes: "",
        },
      ],
    }]
  }

  setDatabase(formgroups: any)
  {
    console.log(formgroups.businessName)
    //console.log(this.address.value.Address)
    //console.log(Object.keys(this.businessName.value).map(key => ({ id_businessName: key, value_businessName: this.businessName.value[key] })))
    if (this.formData[0]["businessName"] && formgroups.businessName !== undefined) {
      this.formData[0]["businessName"] = (Object.keys(formgroups.businessName.value).map(key => ({ id_businessName: key, value_businessName: formgroups.businessName.value[key] })))
    }

    if (this.formData[0]["fullName"]) {
      this.formData[0]["fullName"] = [{
        id_firstName: "FirstName", value_firstame: formgroups.fullName.value.FirstName,
        id_lastName: "LastName", value_lastName: formgroups.fullName.value.LastName
      }]
    }

    if (this.formData[0]["email"]) {
      this.formData[0]["email"] = (Object.keys(formgroups.email.value).map(key => ({ id_email: key, value_email: formgroups.email.value[key] })))
    }

    //console.log((Object.keys(this.address.value).map(key => ({ id_address: key, value_address: this.address.value[key] }))).splice(0, 3))
    if (this.formData[0]["address"]) {
      this.formData[0]["address"] = [{
        id_address: "Address", value_address: formgroups.address.value.Address,
        id_city: "City", value_city: formgroups.address.value.City,
        id_postalCode: "PostalCode", value_postalCode: formgroups.address.value.PostalCode
      }]
    }

    if (this.formData[0]["number"]) {
      this.formData[0]["number"] = (Object.keys(formgroups.number.value).map(key => ({ id_number: key, value_number: formgroups.number.value[key] })))
    }

    if (this.formData[0]["website"]) {
      this.formData[0]["website"] = (Object.keys(formgroups.website.value).map(key => ({ id_website: key, value_website: formgroups.website.value[key] })))
    }

    if (this.formData[0]["gst"]) {
      this.formData[0]["gst"] = (Object.keys(formgroups.gst.value).map(key => ({ id_gst: key, value_gst: formgroups.gst.value[key] })))
    }

    if (this.formData[0]["notes"]) {
      this.formData[0]["notes"] = (Object.keys(formgroups.notes.value).map(key => ({ id_notes: key, value_notes: formgroups.notes.value[key] })))
    }

    console.log(this.formData[0])
    this.itemsRef.set(this.editFormId, this.formData);
  }
}
