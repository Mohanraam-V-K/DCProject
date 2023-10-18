import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit():void{
  this.userservice.getallreport().subscribe((res1)=>{
    this.msg=res1
    console.log(this.msg);
  })
  }
}
