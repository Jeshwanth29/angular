import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from './loginservice.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    getData:boolean;


   model: any = {};
   flag:boolean;

  constructor(private router:Router,private _httpService:LoginserviceService,private http: HttpClient) { }
  ngOnInit() {
    
  }


// here this event is Auth the user name & password comes form web service 

  loginUser(){

   //console.log(this.model.name,this.model.password);
    var user=this.model.name;
    var password=this.model.password;
    console.log(user);
    console.log(password);
    
    this._httpService.getAdminDetails(user,password)
    .subscribe((res:boolean)=>{
        this.getData=res;
        console.log("flag "+this.getData);
      });
    if(this.getData==true){
      this.flag=true;
      console.log(this.flag);
     this.router.navigate(['/admindashboard']);


   }
   else {
     this.flag=false;
   }
   //let user=this.model.username;
   //let password=this.model.password;
   // Service Call ang Auth Data form  // U take form  Service
   
/*logout()
{
  this.router.navigate(['/login']);
}*/
}


}

