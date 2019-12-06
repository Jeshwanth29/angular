import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient,private _httpService: CustomerserviceService) { }
  
  getUserDetails(){
  	return this.http.get
  	('http://localhost:8042/b_myproj/B_Customer');
  }
}
