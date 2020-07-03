import { Component } from '@angular/core';
import {PatientModel} from './PatientApp.Model';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './PatientApp.component.html',
})

export class AppComponent {
  patientObj:PatientModel=null;
  patientObjs:Array<PatientModel>=new Array<PatientModel>();
  patientError:Array<PatientModel>=new Array<PatientModel>();
  constructor(public httpobj:HttpClient){
    this.patientObj=new PatientModel();
  }
   Submit(){
     this.httpobj.post("https://localhost:44347/Patient/Submit",this.patientObj)
     .subscribe(res=>this.Success(res),
     res=>this.Error(res));
     //http post submit
     //alert(this.patientObj.PatientName+this.patientObj.PatientProblem);
   }
 
   Success(res){
    this.patientObjs=res;
    this.patientObj=new PatientModel();
   }
   Error(res){

   }

}