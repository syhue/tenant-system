import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './dropdown/dropdown.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    DropdownComponent,
    SideBarComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    SideBarComponent,
    TopBarComponent,
  ],
})
export class ComponentModule { }
