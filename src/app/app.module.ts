import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component'; 
import { ChangepasswordComponent } from './customerRightnav/changepassword/changepassword.component';
import { AddcustomersComponent } from './Admin_pages/addcustomers/addcustomers.component';
import { CustomerlistComponent } from './Admin_pages/customerlist/customerlist.component';
import { ProfileComponent } from './customerRightnav/profile/profile.component';
import { AllplansComponent } from './Admin_pages/allplans/allplans.component';
import { BillsComponent } from './Admin_pages/bills/bills.component';
import { ReportsComponent } from './Admin_pages/reports/reports.component';
import { Page7Component } from './pages/page7/page7.component';
import { CurrentbillsComponent } from './Admin_pages/currentbills/currentbills.component';
import { PdfComponent } from './pdf/pdf.component';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    CustomerpageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    ChangepasswordComponent,
    AddcustomersComponent,
    CustomerlistComponent,
    ProfileComponent,
    AllplansComponent,
    BillsComponent,
    ReportsComponent,
    Page7Component,
    CurrentbillsComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
