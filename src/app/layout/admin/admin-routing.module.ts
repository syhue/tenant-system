import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from 'src/app/page/agreement/agreement.component';
import { ClaimsComponent } from 'src/app/page/claims/claims.component';
import { HomeComponent } from 'src/app/page/home/home.component';
import { ProfileComponent } from 'src/app/page/profile/profile.component';
import { UtilityComponent } from 'src/app/page/utility/utility.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'agreement/:id', component: AgreementComponent },
  { path: 'utility/:id', component: UtilityComponent },
  { path: 'claims/:id', component: ClaimsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
