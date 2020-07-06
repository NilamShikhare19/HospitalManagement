import { HomeComponent } from "./PatientApp.HomeComponent";
import{PatientSearchComponent} from "../PatientSearch/PatientApp.PatientSearchComponent";
import {LoginComponent} from "./PatientApp.LoginComponent";
import {SecurityLogic} from "../Utilities/Utility.AuthGuard";

export const PatientHomeRoutes=[
    {path:'',component:HomeComponent,canActivate:[SecurityLogic]},
    {path:'Home',component:HomeComponent,canActivate:[SecurityLogic]},
    {path:'Login',component:LoginComponent},
    //{path:'Patient', loadChildren:()=>import('../PatientEdit/PatientEdit.module').
    //then(m=>m.PatientEditModule)},
    {path:'Hospital',loadChildren:'../PatientEdit/PatientEdit.module#PatientEditModule',canActivate:[SecurityLogic]},
    {path:'Hospital', loadChildren:()=>import('../PatientSearch/PatientSearch.module').
    then(m=>m.PatientSearchModule),canActivate:[SecurityLogic]}
   
];