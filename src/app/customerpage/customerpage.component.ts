import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent {
  constructor(private router:Router){}
logout(){
  sessionStorage.clear()
  this.router.navigate(["/"],{replaceUrl:true});
}
}
