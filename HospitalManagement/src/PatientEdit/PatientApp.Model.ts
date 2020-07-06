 import {NgForm,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

export class PatientModel{
    ID:number=0;
    patientName:string="";
    patientProblem:string="";

    //for validation
    formPatientGroup:FormGroup=null;
    constructor(){
        var _builder=new FormBuilder();
        this.formPatientGroup=_builder.group({});//it can create a structure

        //first validation for name
        this.formPatientGroup.addControl("namecontrol",new FormControl('',Validators.required));
        //second validation for problem
         this.formPatientGroup.addControl("problemcontrol",new FormControl('',Validators.required));

    }
} 