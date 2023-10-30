import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
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
  wes:any
  // cusobj:customerbilldata=new customerbilldata("","","","","","","")
  cusplanobj:customerbill=new customerbill("");
  constructor(private userservice:UserserviceService,private router:Router){
  }
  ngOnInit():void{
    this.cusplanobj.email=sessionStorage.getItem("email");
    this.userservice.getplanofacustomer(this.cusplanobj).subscribe((res)=>{
      this.wes=res
      if(this.wes.planstatus=="active plan"){
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
      if(sessionStorage.getItem('status')=="active"||sessionStorage.getItem('status')=="Active"){
      this.router.navigate(['/customerpage/allplans'])
      }
      else{
        alert("your account has been suspended please pay the fine amount in your profile to avail our services")
      }
    }
    else{
      alert('Active Plan Exists')
    }
  }
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
        {html: '#my-table',
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
