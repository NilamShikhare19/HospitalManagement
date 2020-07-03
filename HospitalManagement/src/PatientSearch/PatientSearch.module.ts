import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {PatientSearchRoutes} from './PatientApp.PatientSearchRouting';
import { PatientSearchComponent } from './PatientApp.PatientSearchComponent';


@NgModule({
  declarations:[
    PatientSearchComponent
  ],
  imports:[
    CommonModule,HttpClientModule,FormsModule,
    ReactiveFormsModule,RouterModule.forChild(PatientSearchRoutes)

  ],
   providers: [],
  bootstrap: [PatientSearchComponent],
})
export class PatientSearchModule {

 }
