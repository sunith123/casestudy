import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { AdminfuncComponent } from './adminfunc/adminfunc.component';
import { FlightsavaliableComponent } from './flightsavailable/flightsavaliable.component';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AdminsecurityComponent } from './adminsecurity/adminsecurity.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserbookeddataComponent } from './userbookeddata/userbookeddata.component';
import { UpdatebookedseatComponent } from './updatebookedseat/updatebookedseat.component';
import { BookeddetailComponent } from './bookeddetail/bookeddetail.component';
import {MatRadioModule} from '@angular/material/radio';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UserbookeddetailsComponent } from './userbookeddetails/userbookeddetails.component';
import { AddseatavailabilityComponent } from './addseatavailability/addseatavailability.component';
import { PassengerslistComponent } from './passengerslist/passengerslist.component';
import { SeatsavailableComponent } from './seatsavailable/seatsavailable.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    AdminComponent,
    AdminfuncComponent,
    FlightsavaliableComponent,
    FlightdetailComponent,
    DeleteflightComponent,
    UpdateflightComponent,
    AdminsecurityComponent,
    UsersigninComponent,
    UserloginComponent,
    UserbookeddataComponent,
    UpdatebookedseatComponent,
    BookeddetailComponent,
    UserbookeddetailsComponent,
    AddseatavailabilityComponent,
    PassengerslistComponent,
    SeatsavailableComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatRadioModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
