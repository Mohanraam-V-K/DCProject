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
  searchterm1:string="completed";
  searchterm2:string="pending";
  filteredItems1: any[] = [];
  filteredItems2: any[] = [];
  len:number
  reportaccobj:reportacc=new reportacc()
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit():void{
  this.userservice.getallreport().subscribe((res1)=>{
    this.msg=res1
    console.log(this.msg);
    this.filteredItems1=this.msg
    this.filteredItems2=this.msg
    
    
    this.filteredItems2 = this.msg.filter((filteredItems2: { status: string; }) =>

      filteredItems2.status.toLowerCase().includes(this.searchterm2.toLowerCase())

    );
    this.len=this.filteredItems2.length
    this.filteredItems1 = this.msg.filter((filteredItem1: { status: string; }) =>

      filteredItem1.status.toLowerCase().includes(this.searchterm1.toLowerCase())

    );
  })

  }
  yes(){
    this.reportaccobj.email=this.email
    console.log(this.reportaccobj.email+"hello")
    console.log(this.email)
    this.userservice.yesreport(this.reportaccobj).subscribe((res2)=>{
      alert("issue accepted")
      window.location.reload()
    })
  }
  no(){
    this.reportaccobj.email=this.email
    console.log(this.reportaccobj.email+"hello")
    console.log(this.email)
    this.userservice.noreport(this.reportaccobj).subscribe((res2)=>{
      alert("issue denied")
      window.location.reload()
    })
  }
}
