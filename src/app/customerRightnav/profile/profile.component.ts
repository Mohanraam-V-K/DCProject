import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delc, delcb, update } from 'src/signin';
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
email=sessionStorage.getItem('email')
name=sessionStorage.getItem('name')
address=sessionStorage.getItem('address')
phone=sessionStorage.getItem('phone')
gender=sessionStorage.getItem('gender')
updateobj:update=new update();
submit(){
  this.updateobj.email=sessionStorage.getItem('email')
  this.userservice.updateprofile(this.updateobj).subscribe((res)=>{
    if(res=="NameSuccess"){
      sessionStorage.setItem('name',this.updateobj.customerName)
    }
    else if(res=="AddressSuccess"){
      sessionStorage.setItem('address',this.updateobj.address)
    }
    else if(res=="BothSuccess"){
      sessionStorage.setItem('name',this.updateobj.customerName)
      sessionStorage.setItem('address',this.updateobj.address)
    }
  })
}
// console.log(updateobj)
delcbobj:delcb=new delcb();
delcobj:delc=new delc();
}
