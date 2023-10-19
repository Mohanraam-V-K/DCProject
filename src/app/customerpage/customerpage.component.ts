import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent {
  constructor(private router:Router){}
  private loggedIn = new BehaviorSubject<boolean>(false);

 

  get isLoggedIn() {

    return this.loggedIn.asObservable();

  }

logout(){
  this.loggedIn.next(false);

  sessionStorage.clear()
  this.router.navigate(["/"]);
}
}
