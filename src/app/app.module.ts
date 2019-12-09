import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './b_login/login.component';
import { AdmindashboardComponent } from './b_admindashboard/admindashboard.component';
import {CustomerComponent} from './b_customer/customer.component';
import { AgentComponent } from './b_agent/agent.component';
import { AgentregistrationComponent } from './b_agentregistration/agentregistration.component';
import {AgGridModule} from "@ag-grid-community/angular";
import { HttpClientModule } from '@angular/common/http';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
/*import { ReactiveFormsModule } from '@angular/forms';*/
import { AgentserviceService } from './b_agent/agentservice.service';
import { CustomerserviceService } from './b_customer/customerservice.service';
import { AgentregistrationserviceService } from './b_agentregistration/agentregistrationservice.service';
import { LoginserviceService } from './b_login/loginservice.service';
import { AdminupdatecomponentComponent } from './b_adminupdatecomponent/adminupdatecomponent.component';
import { AdminupdateserviceService } from './b_adminupdatecomponent/adminupdateservice.service';
//import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    CustomerComponent,
    AgentComponent,
    AgentregistrationComponent,
    AdminupdatecomponentComponent,
    

   // NewregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      HttpClientModule,
     
       //ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
