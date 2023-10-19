import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { reportacc } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  msg:any
  id:string="";
  email:string="";
  catogory:string="";
  description:string="";
  date:string="";
  reportaccobj:reportacc=new reportacc()
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit():void{
  this.userservice.getallreport().subscribe((res1)=>{
    this.msg=res1
    console.log(this.msg);
  })
  }
  yes(){
    this.reportaccobj.email=this.email
    console.log(this.reportaccobj.email+"hello")
    console.log(this.email)
    this.userservice.yesreport(this.reportaccobj).subscribe((res2)=>{
      alert("issue accepted")
    })
  }
  no(){
    this.reportaccobj.email=this.email
    console.log(this.reportaccobj.email+"hello")
    console.log(this.email)
    this.userservice.noreport(this.reportaccobj).subscribe((res2)=>{
      alert("issue denied")
    })
  }
}
