import { Component } from '@angular/core';
import { changepassword, customer, login } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  isRegister:boolean=false;
  changeobj:changepassword=new changepassword("","","","");
  customerobj:customer=new customer("","")
  msg:any
  getdata:any;
  oldpwd:string=this.changeobj.oldpassword
  
  constructor(private userservice:UserserviceService,private router:Router){
  }
a(){
  if(this.changeobj.oldpassword==sessionStorage.getItem('password')){
    this.oldpwd="password is correct"}
    else{
      this.oldpwd="password doesn't match"
    }
}

  changepass(){
    if(this.changeobj.newpassword!=""){
    if(this.changeobj.oldpassword==sessionStorage.getItem('password')){
      if(this.changeobj.newpassword!=sessionStorage.getItem('password')){
          if(this.changeobj.newpassword==this.changeobj.confirmnewpassword){
        this.customerobj.email=sessionStorage.getItem('email');
        this.customerobj.password=this.changeobj.confirmnewpassword
        console.log(this.customerobj)
        this.userservice.changepassword(this.customerobj).subscribe((data1)=>{
          console.log(data1)
        if(data1=="Success"){
          alert("password changed successfully")
        }
        else{
          alert("no user found")
        }
      sessionStorage.setItem('password',this.customerobj.password)
      })
    }
    else{
      alert("new password and confirm password are not same")
    }
  }
  else{
    alert("old password and new password cant be same")
  }
  }
  else{
    alert("correctly enter your old password")
  }
  }
  else{
    alert("password can't be empty")
  }
}
}