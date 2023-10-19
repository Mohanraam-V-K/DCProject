import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './customerRightnav/profile/profile.component';
import { ChangepasswordComponent } from './customerRightnav/changepassword/changepassword.component';
import { AddcustomersComponent } from './Admin_pages/addcustomers/addcustomers.component';
import { AdminhomeComponent } from './Admin_pages/adminhome/adminhome.component';
import { CustomerlistComponent } from './Admin_pages/customerlist/customerlist.component';
import { AllplansComponent } from './Admin_pages/allplans/allplans.component'; 
import { BillsComponent } from './Admin_pages/bills/bills.component';
import { ReportsComponent } from './Admin_pages/reports/reports.component';
import { Page7Component } from './pages/page7/page7.component';
import { CurrentbillsComponent } from './Admin_pages/currentbills/currentbills.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
  path:'customerpage',
  component:CustomerpageComponent,
  children:[{
      path: 'customerpage',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: Page1Component
    },
    {
      path: 'myplans',
      component: Page2Component
    },
    {
      path: 'allplans',
      component: Page3Component
    },
    {
      path:'buyplan',
      component:Page7Component
    },
    {
      path: 'billhistory',
      component: Page4Component
    },
    {
      path: 'payment',
      component: Page5Component
    },
    {
      path:'report',
      component:Page6Component
    },
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'changepassword',
      component:ChangepasswordComponent
    }
  ]
  },
  {
    path:'pdf',
    component:PdfComponent
  },
{
  path:'adminpage',
  component:AdminpageComponent,
  children:[
    {
      path:'addcustomers',
      component:AddcustomersComponent
    },
    {
      path:'adminhome',
      component:AdminhomeComponent
    },
    {
      path:'customerlist',
      component:CustomerlistComponent
    },
    {
      path:'allplans',
      component:AllplansComponent
    },
    {
      path:'reports',
      component:ReportsComponent
    },
    {
      path:'bills',
      component:BillsComponent
    },
    {
      path:'currentbills',
      component:CurrentbillsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
