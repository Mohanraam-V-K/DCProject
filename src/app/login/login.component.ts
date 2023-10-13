import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer, login, signup } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isRegister:boolean=false;
  title = 'proj';
  msg:any;
  msg1:any;
  userobj:login=new login("","");
  userobj1:customer=new customer("","");
  getdata:any;
  getdata1:any;
  getdata2:any;
  signupobj:signup=new signup("","","","","","","")
  constructor(private userservice:UserserviceService,private router:Router){
  }
  ngOnInit(){

  }
  forgotnow(){
    alert("OTP sent successfully")
    this.userobj1.email=this.userobj.username
    let reg=this.userservice.register(this.userobj1)
    reg.subscribe((data)=>this.msg=data)
  }
  loginnow(){
    if(this.userobj.username=="admin"){
    this.userservice.getUserData(this.userobj).subscribe((res)=>{
      if(res!=null){
        this.msg=res
        this.router.navigate(['/adminpage/adminhome'])
      }
      else{
        alert("wrong username or password")
      }
    })
  }
    else{
    this.userobj1.email=this.userobj.username
    this.userobj1.password=this.userobj.password
    this.userservice.getCustomerData(this.userobj1).subscribe((res1)=>{
      this.getdata=res1
      if(res1!=null){
        console.log(res1)
        sessionStorage.setItem('email',this.userobj1.email)
        sessionStorage.setItem('password',this.userobj1.password)
        sessionStorage.setItem('address',this.getdata.address)
        sessionStorage.setItem('gender',this.getdata.gender)
        sessionStorage.setItem('name',this.getdata.customerName)
        sessionStorage.setItem('phone',this.getdata.phoneNumber)
        this.router.navigate(['/customerpage/home'])
      }
      else{
        alert("invalid username or password")
      }
    })
  }   
} 

  signup(){
      if(this.signupobj.customerName!=null){
        if(this.signupobj.email!=null){
          if(this.signupobj.phoneNumber!=null){
            if(this.signupobj.address!=null){
              if(this.signupobj.password==this.signupobj.cpassword){
                this.userservice.addACustomer(this.signupobj).subscribe((data)=>{
                  if(data=="Created"){
                    alert("Added successfully")
                  }
                  else if(data=="Already Exist"){
                    alert("Customer already exists")
                  }
                  else if(data=="No values"){
                    alert("error")
                  } 
                })
              }
              else{
                alert("password and confirm password are not same")
              }

            }
            else{
              alert("address cant be empty")
            }

          }
          else{
            alert("Phone number cant be empty")
          }

        }
        else{
          alert("CustomerName cant be empty")
        }
      }
      else{
        alert("Customer name cant be empty")
      }
  }
  }