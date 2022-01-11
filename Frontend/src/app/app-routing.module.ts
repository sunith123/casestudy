import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddseatavailabilityComponent } from './addseatavailability/addseatavailability.component';
import { AdminComponent } from './admin/admin.component';
import { AdminfuncComponent } from './adminfunc/adminfunc.component';
import { AdminsecurityComponent } from './adminsecurity/adminsecurity.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { FlightsavaliableComponent } from './flightsavailable/flightsavaliable.component';
import { NavComponent } from './nav/nav.component';
import { PassengerslistComponent } from './passengerslist/passengerslist.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SeatsavailableComponent } from './seatsavailable/seatsavailable.component';
import { UpdatebookedseatComponent } from './updatebookedseat/updatebookedseat.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UserbookeddataComponent } from './userbookeddata/userbookeddata.component';
import { UserbookeddetailsComponent } from './userbookeddetails/userbookeddetails.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersigninComponent } from './usersignin/usersignin.component';



const routes: Routes = [

  {
    path:'search',component:SearchComponent
  },
  {
    path:'addflight',component:AdminComponent
  },
  {
    path:'flightsavailable',component:FlightsavaliableComponent
  },
  {
    path:'flightdetail',component:FlightdetailComponent
  },
  {
    path:'flightdelete',component:DeleteflightComponent
  },
  {
    path:'updateflight',component:UpdateflightComponent
  },
  {
    path:'adminauth',component:AdminsecurityComponent
  },

  {
    path:'adminfunc',component:AdminfuncComponent
  },
  {
    path:'nav',component:NavComponent
  },

  {
    path:'signup',component:UsersigninComponent
  },

  {
    path:'login',component:UserloginComponent
  },
  {
    path:'viewupdate',component:UserbookeddataComponent
  },
  {
    path:'userdetail',component:UserbookeddetailsComponent
  },
  {
    path:'updateseat',component:UpdatebookedseatComponent
  },
  {
    path:'addvacancy',component:AddseatavailabilityComponent
  },
  {
    path:'passengerslist',component:PassengerslistComponent
  },
  {
    path:'seatsavailable',component:SeatsavailableComponent
  },
  {
    path:'payment',component:PaymentComponent
  },

  {
    path:'', redirectTo:'/nav',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  SearchComponent,
  NavComponent,
  AdminComponent,
  AdminfuncComponent,
  FlightsavaliableComponent,
  DeleteflightComponent,
  UpdateflightComponent,
  AdminsecurityComponent,
  UsersigninComponent,
  UserloginComponent,
  UserbookeddataComponent,
  UserbookeddetailsComponent,
  UpdatebookedseatComponent,
  AddseatavailabilityComponent,
  PassengerslistComponent,
  SeatsavailableComponent,
  PaymentComponent
]
