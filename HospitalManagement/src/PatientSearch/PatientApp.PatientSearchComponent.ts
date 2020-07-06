 import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientModel} from '../PatientEdit/PatientApp.Model';

@Component({
  selector:'app-root',
  templateUrl:'./PatientApp.PatientSearchComponent.html',
})
export class PatientSearchComponent{
  patientName:string="";
  patientModels:Array<PatientModel>=new Array<PatientModel>();
  constructor(public http:HttpClient){}
   
  search(){
     this.http.get("https://localhost:44347/api/PatientApi?PatientName="+this.patientName)
     .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
Success(res){
this.patientModels=res;
}
Error(res){

}
}