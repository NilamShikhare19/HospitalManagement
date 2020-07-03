import { HomeComponent } from "./PatientApp.HomeComponent";
import{PatientSearchComponent} from "../PatientSearch/PatientApp.PatientSearchComponent";

export const PatientHomeRoutes=[
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    //{path:'Patient', loadChildren:()=>import('../PatientEdit/PatientEdit.module').
    //then(m=>m.PatientEditModule)},
    {path:'Hospital',loadChildren:'../PatientEdit/PatientEdit.module#PatientEditModule'},
    {path:'Hospital', loadChildren:()=>import('../PatientSearch/PatientSearch.module').
    then(m=>m.PatientSearchModule)}
   
];