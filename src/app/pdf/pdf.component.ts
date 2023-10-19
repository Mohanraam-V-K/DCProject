import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
// import PDFObject from PDFObject;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  
 table_data =[
  {month:"September",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/10/23"},
  {month:"August",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/09/23"},
  {month:"July",previous:"1174.23",payments:"1174.23",charges:"1203.47",amount:"1203.47",payDate:"05/08/23"}
  ]

  username="Aakriti Krishnan"
  address="T1, Aadishesha Narayana Apartments, Dhayalan Street, M G Ramachandran Nagar, Kotturpuram, Pune-3598014"
  title="Bill.pdf"
  plan="Family Plan 1199"
  start='12 Sept 2023'
  cycle='11 Aug 23 - 10 Sept 23'
  number='9574246784'
  email='aakriti12@gmail.com'
  
  public download() {
    var doc = new jsPDF("p", "mm", "a4");
    doc.setTextColor(235,38,42);
    doc.setFont('','bold');
    doc.text("POSTPAID MONTHLY BILL",20,20);
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
    doc.text('Your current plan : '+this.plan,20,70)
    doc.setFont('','normal');
    doc.text('Statement Period : '+this.cycle,20,75)
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
