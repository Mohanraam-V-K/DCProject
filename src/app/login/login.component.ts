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
  isRegister:boolean=true;
  title = 'proj';
  msg:any;
  msg1:any;
  userobj:login=new login("","");
  userobj1:customer=new customer("","");
  getdata:any;
  getdata1:any;
  getdata2:any;
  signupobj:signup=new signup("","","","","","","")
  signups:boolean=false;
  next:boolean=false;
  button:boolean=false;
  terms:boolean=false;
  pass:boolean=false;
  em:string=this.userobj.username;
  b:string="";
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
  check(){
    if (this.button==false){
      this.button=true
    }
    else{
      this.button=false
    }
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
        sessionStorage.setItem('customerid',this.getdata.customerId)
        sessionStorage.setItem('status',this.getdata.status)
        sessionStorage.setItem('fineamount',this.getdata.fineAmount)
        this.router.navigate(['/customerpage/home'])
      }
      else{
        alert("invalid username or password")
      }
    })
  }   
} 
a(){
  if(this.em.includes("@gmail.com")){
    this.b="Email valid"
  }
  else{
    this.b="Enter valid email"
  }
}

  terms1(){
      if(this.signupobj.customerName!=""){
        if(this.signupobj.email!=""){
          if(this.signupobj.phoneNumber!=""){
            if(this.signupobj.address!=""){
              if(this.signupobj.password!=""){
                if(this.signupobj.password==this.signupobj.cpassword){
                  if(this.signupobj.gender!="")
                  {this.terms=true;this.signups=false}
              else{
                alert("select a gender")
              }
              }

            else{
                alert("password and confirm password are not same")
            }
          }
              else{
                alert("password should not be empty")
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
          alert("Email cant be empty")
        }
      }
      else{
        alert("Customer name cant be empty")
      }
  }

  signup(){
    
    this.userservice.addACustomer(this.signupobj).subscribe((data)=>{
      if(data=="Created"){
        alert("Added successfully")
        window.location.reload()
      }
      else if(data=="Already Exist"){
        alert("Customer already exists")
      }
      else if(data=="No values"){
        alert("error")
      } 
    })
  }
  }