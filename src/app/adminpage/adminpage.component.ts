import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
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
private loggedIn = new BehaviorSubject<boolean>(false);

 

  get isLoggedIn() {

    return this.loggedIn.asObservable();

  }
logout(){
  this.loggedIn.next(false);

  this.router.navigate(["/"],{replaceUrl:true});
}
}
