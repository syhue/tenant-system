import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/component/component.module';
import { AgreementComponent } from 'src/app/page/agreement/agreement.component';
import { ClaimsComponent } from 'src/app/page/claims/claims.component';
import { HomeComponent } from 'src/app/page/home/home.component';
import { ProfileComponent } from 'src/app/page/profile/profile.component';
import { UtilityComponent } from 'src/app/page/utility/utility.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AgreementComponent,
    ClaimsComponent,
    HomeComponent,
    ProfileComponent,
    UtilityComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ComponentModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
