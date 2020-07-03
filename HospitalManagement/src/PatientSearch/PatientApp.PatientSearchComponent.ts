 import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientModel} from '../PatientEdit/PatientApp.Model';

@Component({
  selector:'app-root',
  templateUrl:'./PatientApp.PatientSearchComponent.html',
})
export class PatientSearchComponent{
  PatientName:string="";
  PatientModels:Array<PatientModel>=new Array<PatientModel>();
  constructor(public http:HttpClient){}
   
  search(){
     this.http.get("https://localhost:44347/api/PatientApi?PatientName="+this.PatientName)
     .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
Success(res){
this.PatientModels=res;
}
Error(res){

}
}