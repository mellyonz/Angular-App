import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';



import { environment } from '../environments/environment';
import { FormComponent } from './form/form.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceGridComponent } from './invoice-grid/invoice-grid.component';

@NgModule({
  declarations: [AppComponent, FormComponent, FormContainerComponent, InvoiceContainerComponent, InvoiceFormComponent, InvoiceGridComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
