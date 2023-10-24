import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { billmail } from 'src/signin';
import { UserserviceService } from 'src/userservice.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

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
name:string=""
type:string=""
duration:string=""
amount:string=""
due:string=""
num:any=sessionStorage.getItem('phone')
hide:boolean=false
stat:string=""
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

table_data =[
  {month:"September",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/10/23"},
  {month:"August",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/09/23"},
  {month:"July",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/08/23"}
  ]

  username:any=sessionStorage.getItem('name')
address:any=sessionStorage.getItem('address')
  title="Bill.pdf"
  // plan=this.name
  start='12 Sept 2023'
  cycle='11 Aug 23 - 10 Sept 23'
  number=this.num
  email:any=sessionStorage.getItem('email')
  
  public download() {
    var doc = new jsPDF("p", "mm", "a4");
    doc.setTextColor(235,38,42);
    doc.setFont('','bold');
    doc.text("PREPAID BILL",20,20);
    doc.setFont('','normal');
    doc.setTextColor(0,0,0);
    doc.setFontSize(11);
    doc.setFont('','bold');
    doc.text(this.username,20, 30);
    doc.setFont('','normal');
    doc.text(this.address,20, 35,{ maxWidth: 60 }); 
    doc.text("Mobile Number : "+this.number,20,55) 
    doc.text("Email : "+this.email,20,60)   
    doc.setFont('','bold');
    doc.text('Plan : '+this.name,20,70)
    doc.setFont('','normal');
    // doc.text('Statement Period : '+this.cycle,20,75)
    autoTable(doc,
      {html: '#my-table1',
      startY:90,
      theme:'grid',
      styles: { halign: 'center' },
      headStyles: {fillColor:[0,0,0],textColor:[255,255,255]}
    })    
    doc.save(this.title);
    doc.output('datauristring');        //returns the data uri string
    doc.output('datauri');              //opens the data uri in current window
    doc.output('dataurlnewwindow');
}
}
