import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addacustomer, billmail, changepassword, customer, customerbill, customerbilldata, getacustomerbill, login, report, reportacc, signup, update } from './signin';

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
       return this.http.get("http://localhost:8080/api/v1/bill/"+cusplanobj.email);
      }
      addACustomer(signupobj:signup){
        return this.http.post("http://localhost:8080/api/v1/customer",signupobj,{responseType: 'text'});
       }
       getallplans(){
        return this.http.get("http://localhost:8080/api/v1/plans")
       }
       report(reportobj:report){
        return this.http.post("http://localhost:8080/api/v1/report",reportobj,{responseType: 'text'})
       }
       getallreport(){
        return this.http.get("http://localhost:8080/api/v1/report")
       }

       addplanforcustomer(customerbillobj:customerbill){
        return this.http.post("http://localhost:8080/api/v1/bill",customerbillobj,{responseType: 'text'})
       }

       getplanofthecustomer(customerbillobj:customerbilldata){
        return this.http.get("http://localhost:8080/api/v1/bill/"+customerbillobj.email);
       }

       updateprofile(updateobj:update){
        return this.http.put("http://localhost:8080/api/v1/customer/updateprofile",updateobj,{responseType: 'text'})
       }
       
       getmybillhistory(billmailobj:billmail){
        return this.http.get("http://localhost:8080/api/v1/history/"+billmailobj.email);
       }

       getallbillshistory(){
        return this.http.get("http://localhost:8080/api/v1/history")
       }

       getallbills(){
        return this.http.get("http://localhost:8080/api/v1/bill")
       }

       yesreport(reportaccobj:reportacc){
        return this.http.get("http://localhost:8080/api/v1/report/yes/"+reportaccobj.email)
       }

       noreport(reportaccobj:reportacc){
        return this.http.get("http://localhost:8080/api/v1/report/no/"+reportaccobj.email)
       }
    }
