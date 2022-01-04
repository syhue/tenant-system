import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from 'src/app/page/agreement/agreement.component';
import { ClaimsComponent } from 'src/app/page/claims/claims.component';
import { HomeComponent } from 'src/app/page/home/home.component';
import { ProfileComponent } from 'src/app/page/profile/profile.component';
import { UtilityComponent } from 'src/app/page/utility/utility.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'utility', component: UtilityComponent },
  { path: 'claims', component: ClaimsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
