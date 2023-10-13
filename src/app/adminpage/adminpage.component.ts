import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/userservice.service';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'] ,
  changeDetection:ChangeDetectionStrategy.Default,
})
export class AdminpageComponent {
constructor(private cd:ChangeDetectorRef,private router:Router,private userservice:UserserviceService){
}
ngDoCheck():void {
  this.cd.markForCheck();
}
logout(){
  this.router.navigate(["/"],{replaceUrl:true});
}
}
