import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './PatientApp.HomeComponent';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterComponent } from "./PatientApp.MasterComponent";
import {PatientHomeRoutes} from './PatientApp.PatientHomeRouting';

@NgModule({
  declarations: [
  HomeComponent,MasterComponent,HomeComponent,MasterComponent
  ],
  imports: [
    BrowserModule,CommonModule,FormsModule,HttpClientModule,
    ReactiveFormsModule,RouterModule.forRoot(PatientHomeRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class PatientHomeModule { }
