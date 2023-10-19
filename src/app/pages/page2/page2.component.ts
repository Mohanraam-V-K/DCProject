import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { customerbill, customerbilldata } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  // rout:customerbilldata=new customerbilldata("","","","","","","")
  // rout:customerbilldata[] | undefined;
  rout!: Array<customerbilldata>;
  msg:any;
  customerid:any;
  name:any;
  type:any;
  duration:any;
  amount:any;
  due:any;
  show:boolean=false;
  num:any=sessionStorage.getItem('phone')

  // cusobj:customerbilldata=new customerbilldata("","","","","","","")
  cusplanobj:customerbill=new customerbill("");
  constructor(private userservice:UserserviceService,private router:Router){
  }
  ngOnInit():void{
    this.cusplanobj.email=sessionStorage.getItem("email");
    this.userservice.getplanofacustomer(this.cusplanobj).subscribe((res)=>{
      if(res!=null){
        this.show=true
      this.msg=res
      this.rout=this.msg
      console.log(this.rout)
      this.customerid=this.msg.customerId
      this.name=this.msg.planName
      this.type=this.msg.plan_type
      this.duration=this.msg.planDuration
      this.amount=this.msg.planAmount
      this.due=this.msg.planDueDate
      console.log(this.customerid)
      }
      else{
        this.show=false
      }
    })
  }
  recharge(){
    if(this.show==false){
      this.router.navigate(['/customerpage/allplans'])
    }
    else{
      alert('Avtive Plan Exists')
    }
  }
}
