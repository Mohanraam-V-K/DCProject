import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { report } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component {
  textgiven:String;
  categorygive:String;
  msg:any;
  reportobj:report = new report();
  constructor(private userservice:UserserviceService,private router:Router){
    
  }
  submit(){
    console.log(this.reportobj.description)
    let dateTime = new Date()
    let date=dateTime.toLocaleDateString()
    this.reportobj.date=date
    this.reportobj.customeremail=sessionStorage.getItem("email")
    this.reportobj.category=this.categorygive;
    this.reportobj.description=this.textgiven;
    if(this.reportobj.category!=null){
      if(this.reportobj.description!=null){
    this.userservice.report(this.reportobj).subscribe((res1)=>{
      this.msg=res1
      console.log(this.msg)
      if(res1=="Success"){
        alert("Successful")
      }
    })
  }
  else{
    alert("description cant be null")
  }
  }
  else{
    alert("category cant be null")
  }
  }
}
