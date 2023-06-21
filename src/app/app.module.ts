import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { TenantComponent } from './tenant/tenant.component';
import { HouseCommitteeComponent } from './house-committee/house-committee.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentHistoryComponent } from './payments/payment-history/payment-history.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth/auth.guard';
import {AuthService} from "./auth/auth.service";
import { RegisterComponent } from './register/register.component';
import {
  HouseCommitteePaymentHistoryListComponent
} from "./house-committee/house-committe-payment-history-list/house-comitte-payment-history-list.component";
import { CreateUpdateComponent } from './house-committee/create-update/create-update.component';

const  appRoutes:Routes = [
  {path:'login',component:LoginComponent} ,
  {path:'tenant',component:TenantComponent,canActivate: [AuthGuard]},
  {path:'payment',component:PaymentsComponent,canActivate: [AuthGuard]},
  {path:'paymentHistory',component:PaymentHistoryComponent,canActivate: [AuthGuard]},
  {path:'housecommitte',component:HouseCommitteeComponent,canActivate: [AuthGuard]},
  {path:'update',component:UpdateComponent,canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent,canActivate: [AuthGuard]},
  {path:'housecommittepaymenthistorylist', component:HouseCommitteePaymentHistoryListComponent,canActivate : [AuthGuard]},
  {path:'createupdate', component:CreateUpdateComponent,canActivate : [AuthGuard]},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenantComponent,
    HouseCommitteeComponent,
    PaymentsComponent,
    PaymentHistoryComponent,
    UpdateComponent,
    RegisterComponent,
    HouseCommitteePaymentHistoryListComponent,
    CreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
