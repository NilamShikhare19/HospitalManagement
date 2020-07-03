import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PatientComponent } from './PatientApp.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PatientEditRoutes} from './PatientApp.PatientEditRouting';


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
CommonModule,FormsModule,HttpClientModule,
    ReactiveFormsModule,RouterModule.forChild(PatientEditRoutes)
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientEditModule { 

}
