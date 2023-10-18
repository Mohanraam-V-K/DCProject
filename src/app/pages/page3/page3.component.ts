import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { customerbill, customerbilldata } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {

msg:any

mobile:boolean=false;

internet:boolean=false;

plan11:boolean=false;

obj:any;

z: any;

constructor(private userservice:UserserviceService,private router:Router){}

mobile1(){

  if(this.mobile==false){

    this.mobile=true;

    this.plan11=false;



  }

  else{

    this.mobile=false;

    this.plan11=false;


  }

  if(this.internet==true){

    this.internet=false;

  }

}

internet1(){

  if(this.internet==false){

    this.internet=true;

    this.plan11=false;

  }

  else{

    this.internet=false;

    this.plan11=false;

  }

  if(this.mobile==true){

    this.mobile=false;

  }

}

 


form:boolean=false;


name:string="";
validity:number;
data:string="";
amount:string="";
id:string="";
type:string="";
talktime:string="";
sms:string="";
due:any
cusplanobj:customerbill=new customerbill("");
customerbillobj:customerbilldata=new customerbilldata()
msg1:any
draw:boolean=false;
draw1:boolean=false;
ngOnInit():void{
  this.userservice.getallplans().subscribe((res)=>{
    this.msg=res;
    console.log(this.msg)
    // this.validity=this.msg.plan;
  })
}
  plandet(){
    console.log(this.name);
    if(this.plan11==false){
      this.plan11=true
    }
    
  }

popup(){
  if (this.form==false){
    this.form=true;
  }
  else{
    this.form=false;
  }
}

  Buy(){
    
  if(sessionStorage.getItem("status")=="active"){
  var today = new Date();
  var startDate = new Date();
  console.log(today)
  startDate.setDate(today.getDate() + this.validity);
  let val=startDate.toISOString().split('T')[0]+"T09:00:00";
  this.customerbillobj.email=sessionStorage.getItem("email");
  this.customerbillobj.customerId=sessionStorage.getItem("customerid");
      this.customerbillobj.email=sessionStorage.getItem("email");
      this.customerbillobj.planAmount=this.amount
      this.customerbillobj.planDueDate=val
      this.customerbillobj.planDuration=this.validity
      this.customerbillobj.planName=this.name
      this.customerbillobj.plan_type=this.type
      console.log(this.customerbillobj)
      this.userservice.addplanforcustomer(this.customerbillobj).subscribe((res1)=>{
        console.log(res1)
      alert(res1)})}
//   this.userservice.getplanofthecustomer(this.customerbillobj).subscribe((res1)=>{
//     if(res1!=null){
//     this.msg1=res1
//     this.due=this.msg1.planDueDate
//     let duedate=this.due
//     var date = new Date(duedate)
//     var today1=new Date()
//     let todaydate=today1.toISOString().split('T')[0]+"T09:00:00";
//     var todaysdate=new Date(todaydate)
//     console.log(date)
//     console.log(todaysdate)
//     let adiff=date.getTime()-todaysdate.getTime()
//     let diff=adiff/(1000 * 60 * 60 * 24);
//     console.log(diff)
//     if(diff<=0 && diff>-10){
//       this.customerbillobj.customerId=sessionStorage.getItem("customerid");
//       this.customerbillobj.email=sessionStorage.getItem("email");
//       this.customerbillobj.planAmount=this.amount
//       this.customerbillobj.planDueDate=val
//       this.customerbillobj.planDuration=this.validity
//       this.customerbillobj.planName=this.name
//       this.customerbillobj.plan_type=this.type

//       this.userservice.addplanforcustomer(this.customerbillobj).subscribe((res2)=>{
//         console.log(res2)
//         console.log(diff)
//         alert("recharge successfull")
//       })

//     }
//     else if(diff<-10) {
//       alert("your account has been suspended")
//     }
//     else if(diff>0){
//       alert("your plan is valid till "+diff+" days")
//     }
//   }
//   else{
//     this.customerbillobj.customerId=sessionStorage.getItem("customerid");
//       this.customerbillobj.email=sessionStorage.getItem("email");
//       this.customerbillobj.planAmount=this.amount
//       this.customerbillobj.planDueDate=val
//       this.customerbillobj.planDuration=this.validity
//       this.customerbillobj.planName=this.name
//       this.customerbillobj.plan_type=this.type
//       console.log(this.customerbillobj)
//       this.userservice.addplanforcustomer(this.customerbillobj).subscribe((res1)=>{
//         console.log(res1)
//       alert(res1)})
//   }
//   })  
// }
else{
  alert("your account is suspended because of inactivity")
}
  }
}