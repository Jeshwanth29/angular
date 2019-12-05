
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent} from './admindashboard/admindashboard.component';
import{LogoutComponent} from './logout/logout.component';
import{CustomerComponent} from './customer/customer.component';
import{ AgentComponent } from './agent/agent.component';
import{AgentregistrationComponent} from './agentregistration/agentregistration.component';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
import { AdminupdatecomponentComponent } from './adminupdatecomponent/adminupdatecomponent.component'

const routes: Routes = [
 { path:'',redirectTo:'login',pathMatch:'full'},
 { path:'login', component:LoginComponent },
 { path:'admindashboard', component:AdmindashboardComponent},
 {path:'logout',component:LogoutComponent},
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