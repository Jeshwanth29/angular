
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './b_login/login.component';
import { AdmindashboardComponent} from './b_admindashboard/admindashboard.component';
import{CustomerComponent} from './b_customer/customer.component';
import{ AgentComponent } from './b_agent/agent.component';
import{AgentregistrationComponent} from './b_agentregistration/agentregistration.component';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
import { AdminupdatecomponentComponent } from './b_adminupdatecomponent/adminupdatecomponent.component'

const routes: Routes = [
 { path:'',redirectTo:'login',pathMatch:'full'},
 { path:'login', component:LoginComponent },
 { path:'admindashboard', component:AdmindashboardComponent},
 {path:'customer',component:CustomerComponent},
  {path:'agent',component:AgentComponent},
   {path:'agentregistration',component:AgentregistrationComponent},
   {path:'adminupdatecomponent', component:AdminupdatecomponentComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }