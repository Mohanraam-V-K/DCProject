import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addacustomer, changepassword, customer, getacustomerbill, login, signup } from './signin';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpClient) { }
    register(userobj1:customer){ 
      return this.http.post("http://localhost:8080/api/v1/customer/forgotPassGen",userobj1)    
    }
     getUserData(userobj:login){
        return this.http.post("http://localhost:8080/api/v1/login/user",userobj);
    }
     getCustomerData(userobj1:customer){
      return this.http.post("http://localhost:8080/api/v1/customer/user",userobj1);
     }
     changepassword(customerobj:customer){
      return this.http.put("http://localhost:8080/api/v1/customer/changepass",customerobj,{responseType: 'text'});
     }
     AddACustomer(addobj:addacustomer){
      return this.http.post("http://localhost:8080/api/v1/customer",addobj,{responseType: 'text'});
     }
     getAllCustomer(){
      return this.http.get("http://localhost:8080/api/v1/customer");
     }
     getplanofacustomer(cusplanobj:getacustomerbill){
       return this.http.get("http://localhost:8080/api/v1/bill/"+cusplanobj.email,{responseType: 'json'});
      }
      addACustomer(signupobj:signup){
        return this.http.post("http://localhost:8080/api/v1/customer",signupobj,{responseType: 'text'});
       }
    }
