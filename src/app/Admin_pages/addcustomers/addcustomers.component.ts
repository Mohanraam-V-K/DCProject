import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addacustomer } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent {
  addobj:addacustomer=new addacustomer("","","","","")
  constructor(private userservice:UserserviceService,private router:Router){
  }
  addacustomer(){
    if(this.addobj.gender=="male"||this.addobj.gender=="female"||this.addobj.gender=="others"){
      if(this.addobj.address!=null){
    this.userservice.AddACustomer(this.addobj).subscribe((data)=>{
      console.log(data)
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
    alert("enter address")
  }}
  else{
    alert("Select a gender")
  }
}
}