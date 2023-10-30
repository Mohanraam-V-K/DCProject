import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delc, delcb, paythefine, update } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userservice:UserserviceService,private router:Router){
  }
  up:boolean=false;
  n:string="";
  a:string="";
  p:boolean=false
  form:boolean=false
  draw:boolean=false
  draw1:boolean=false
  
email=sessionStorage.getItem('email')
name=sessionStorage.getItem('name')
address=sessionStorage.getItem('address')
phone=sessionStorage.getItem('phone')
gender=sessionStorage.getItem('gender')
fine=sessionStorage.getItem('fineamount')

ngOnInit(){
  if(sessionStorage.getItem('fineamount')=="0"){
    this.p=false
  }
  else{
    this.p=true
  }
}
popup(){
  if (this.form==false){
    this.form=true
  }
  else{
    this.form=false
  }
}
updateobj:update=new update();
submit(){
  this.updateobj.email=sessionStorage.getItem('email')
  this.userservice.updateprofile(this.updateobj).subscribe((res)=>{
    if(res=="NameSuccess"){
      sessionStorage.setItem('name',this.updateobj.customerName)
      alert("Name changed successfully")
    }
    else if(res=="AddressSuccess"){
      sessionStorage.setItem('address',this.updateobj.address)
      alert("Address changed successfully")
    }
    else if(res=="BothSuccess"){
      sessionStorage.setItem('name',this.updateobj.customerName)
      sessionStorage.setItem('address',this.updateobj.address)
      alert("Name and address have been changed successfully")
    }
  })
}
fineobj:paythefine=new paythefine();
payfine(){
  this.fineobj.customerId=sessionStorage.getItem('customerid')
  this.userservice.finepay(this.fineobj).subscribe((res)=>{
    if(res!=null){
      alert("Fine has been paid successfully")
      window.location.reload()
      sessionStorage.setItem('status',"active")
      sessionStorage.setItem('fineamount',"0")
    }
  })
}
delcbobj:delcb=new delcb();
delcobj:delc=new delc();
delete(){
  this.delcbobj.customerId=sessionStorage.getItem('customerid')
  this.delcobj.customerId=sessionStorage.getItem('customerid')
  if(confirm("Are you sure you want to delete your account ?") == true){

  
  this.userservice.deletecb(this.delcbobj).subscribe((res)=>{
    console.log(res)
    if(res!=null){
      this.userservice.deletec(this.delcobj).subscribe((res1)=>{
        if(res1!=null){
          alert("account deleted successfully")
          sessionStorage.clear()
          this.router.navigate(["/"]);

        }
      })
    }
  })
}
}
}
