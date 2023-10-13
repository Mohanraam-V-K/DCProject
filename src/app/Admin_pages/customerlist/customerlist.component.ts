import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { allcustomer, customerbill, customerbilldata, getacustomerbill } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

  rout!:allcustomer[];
  rout1!: Array<customerbilldata>;
  msg:any;
  msg1:any;
  n:any;
  cusplanobj:customerbill=new customerbill("");
  customerid:any;
  cusname:any;
  type:any;
  duration:any;
  amount:any;
  duedate:any;
  //allcustobj:allcustomer=new allcustomer("","","","","")
  // cbobj:getacustomerbill=new getacustomerbill("")
  constructor(private userservice:UserserviceService,private router:Router){
    // this.userservice.getAllCustomer().subscribe((res)=>{
    //   //this.msg=res
    //   this.rout= this.msg;
    // })

  }

  ngOnInit():void{
    this.userservice.getAllCustomer().subscribe((res)=>{
      this.msg=res
      this.rout= this.msg;
    })
    
  }
  planlist:boolean=false;
name:string="";
  email(){
    this.cusplanobj.email=this.name
    this.userservice.getplanofacustomer(this.cusplanobj).subscribe((res1)=>{
      this.msg1=res1
      this.rout1=this.msg1
      this.customerid=this.msg1.customerId
      this.cusname=this.msg1.planName
      this.type=this.msg1.plan_type
      this.duration=this.msg1.planDuration
      this.amount=this.msg1.planAmount
      this.duedate=this.msg1.planDueDate

    })
    if(this.planlist==false)
      {this.planlist=true;}
  }
  }
