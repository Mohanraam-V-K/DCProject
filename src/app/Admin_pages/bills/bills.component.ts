import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  msg:any
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit():void{
    this.userservice.getallbillshistory().subscribe((res)=>{
      this.msg=res  
    })
  }
}
