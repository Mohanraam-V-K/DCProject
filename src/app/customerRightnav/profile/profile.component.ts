import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
email=sessionStorage.getItem('email')
name=sessionStorage.getItem('name')
address=sessionStorage.getItem('address')
phone=sessionStorage.getItem('phone')
gender=sessionStorage.getItem('gender')
}
