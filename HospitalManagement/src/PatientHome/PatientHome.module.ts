import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './PatientApp.HomeComponent';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterComponent } from "./PatientApp.MasterComponent";
import { LoginComponent } from "./PatientApp.LoginComponent";
import {PatientHomeRoutes} from './PatientApp.PatientHomeRouting';
import {User} from "./PatientApp.LoginModel";
import {SecurityLogic} from "../Utilities/Utility.AuthGuard";

@NgModule({
  declarations: [
  HomeComponent,MasterComponent,HomeComponent,MasterComponent,LoginComponent
  ],
  imports: [
    BrowserModule,CommonModule,FormsModule,HttpClientModule,
    ReactiveFormsModule,RouterModule.forRoot(PatientHomeRoutes)
  ],
  providers: [User,SecurityLogic],
  bootstrap: [MasterComponent]
})
export class PatientHomeModule { }
