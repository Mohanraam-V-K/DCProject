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

plan12:boolean=false;

plan13:boolean=false;

plan14:boolean=false;

plan21:boolean=false;

plan22:boolean=false;

plan23:boolean=false;

plan24:boolean=false;

obj:any;
  msg: any;

constructor(private userservice:UserserviceService,private router:Router){}

mobile1(){

  if(this.mobile==false){

    this.mobile=true;

    this.plan11=false;

    this.plan12=false;

    this.plan13=false;

    this.plan14=false;

    this.plan21=false;

    this.plan22=false;

    this.plan23=false;

    this.plan24=false;

  }

  else{

    this.mobile=false;

    this.plan11=false;

    this.plan12=false;

    this.plan13=false;

    this.plan14=false;

    this.plan21=false;

    this.plan22=false;

    this.plan23=false;

    this.plan24=false;

  }

  if(this.internet==true){

    this.internet=false;

  }

}

internet1(){

  if(this.internet==false){

    this.internet=true;

    this.plan11=false;

    this.plan12=false;

    this.plan13=false;

    this.plan14=false;

    this.plan21=false;

    this.plan22=false;

    this.plan23=false;

    this.plan24=false;

  }

  else{

    this.internet=false;

    this.plan11=false;

    this.plan12=false;

    this.plan13=false;

    this.plan14=false;

    this.plan21=false;

    this.plan22=false;

    this.plan23=false;

    this.plan24=false;

  }

  if(this.mobile==true){

    this.mobile=false;

  }

}

 

planm1(){

  if(this.plan11==false){

    this.plan11=true;

  }


  else{

    this.plan11=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }

}

 

planm2(){

  if(this.plan12==false){

    this.plan12=true;

  }

  else{

    this.plan12=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

planm3(){

  if(this.plan13==false){

    this.plan13=true;

  }

  else{

    this.plan13=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

planm4(){

  if(this.plan14==false){

    this.plan14=true;

  }

  else{

    this.plan14=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

plani1(){

  if(this.plan21==false){

    this.plan21=true;

  }

  else{

    this.plan11=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

plani2(){

  if(this.plan22==false){

    this.plan22=true;

  }

  else{

    this.plan11=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

plani3(){

  if(this.plan23==false){

    this.plan23=true;

  }

  else{

    this.plan11=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan11==true){

    this.plan11=false;

  }

  if(this.plan24==true){

    this.plan24=false;

  }  

}

 

plani4(){

  if(this.plan24==false){

    this.plan24=true;

  }

  else{

    this.plan11=false;

  }

  if(this.plan12==true){

    this.plan12=false;

  }

  if(this.plan13==true){

    this.plan13=false;

  }

  if(this.plan14==true){

    this.plan14=false;

  }

  if(this.plan21==true){

    this.plan21=false;

  }

  if(this.plan22==true){

    this.plan22=false;

  }

  if(this.plan23==true){

    this.plan23=false;

  }

  if(this.plan11==true){

    this.plan11=false;

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
}
