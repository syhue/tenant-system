import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { AuthComponent } from 'src/app/layout/auth/auth.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule) }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/admin/admin.module').then(m => m.AdminModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
