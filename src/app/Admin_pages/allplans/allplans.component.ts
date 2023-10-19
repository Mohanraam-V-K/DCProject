import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-allplans',
  templateUrl: './allplans.component.html',
  styleUrls: ['./allplans.component.css']
})
export class AllplansComponent {
  mobile:boolean=false;

internet:boolean=false;

plan11:boolean=false;

obj:any;
  msg: any;

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
name:string="";
validity:string="";
data:string="";
amount:string="";
id:string="";
type:string="";
talktime:string="";
sms:string="";

ngOnInit():void{
  this.userservice.getallplans().subscribe((res)=>{
    this.msg=res;
    console.log(this.msg+"msg")
    // this.validity=this.msg.plan;
  })
}
  plandet(){
    console.log(this.name);
    if(this.plan11==false){
      this.plan11=true
    }
    
  }
}
