import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientModel} from './PatientApp.Model';
@Component({
  selector: 'app-root',
  templateUrl: './PatientApp.component.html',
})
export class PatientComponent {
  constructor(public httpobj:HttpClient)
  {
    this.patientObj=new PatientModel();
  }

  patientObj:PatientModel=null;
  patientData:Array<PatientModel>=new Array<PatientModel>();
  Submit(){
      let PatientDetails={
        ID:this.patientObj.ID,
        PatientName:this.patientObj.PatientName,
        PatientProblem:this.patientObj.PatientProblem
      } 
      //let patDto:any={};
      //patDto.ID=this.patientObj.ID;
      //patDto.PatientName=this.patientObj.PatientName;
      //patDto.PatientProblem=this.patientObj.PatientProblem; 
     this.httpobj.post("https://localhost:44347/api/PatientApi",PatientDetails)
     .subscribe(res=>this.Success(res),
     res=>this.Error(res));
     //http post submit
     //alert(this.patientObj.PatientName+this.patientObj.PatientProblem);
}
 Success(res){
    this.patientData=res;
    this.patientObj=new PatientModel();
}
Error(res){
  alert(res);
}
}
