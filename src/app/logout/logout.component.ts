import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   model: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }


// here this event is Auth the user name & password comes form web service 

Logout()
{
	this.router.navigate(['/admindashboard']);
}

}
