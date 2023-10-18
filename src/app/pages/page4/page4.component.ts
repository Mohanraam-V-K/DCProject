import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { billmail } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
constructor(private userservice:UserserviceService,private router:Router){}
billmailobj:billmail = new billmail()
msg:any
exp:any[]=[]
i:number
button:boolean=false
date:string="";
ngOnInit():void{
  this.billmailobj.email=sessionStorage.getItem('email')
  this.userservice.getmybillhistory(this.billmailobj).subscribe((res)=>{
    this.msg=res
  })
}
show(){
  // if(form1.value.p.){
  //   this.button=true
  // }
  // else{
  //   this.button=false
  // }
  console.log(this.date)
}
download(){

}
}
