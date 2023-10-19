import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-currentbills',
  templateUrl: './currentbills.component.html',
  styleUrls: ['./currentbills.component.css']
})
export class CurrentbillsComponent {
  msg:any
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit():void{
    this.userservice.getallbills().subscribe((res)=>{
      this.msg=res  
      console.log(this.msg)
    })
  }
}
