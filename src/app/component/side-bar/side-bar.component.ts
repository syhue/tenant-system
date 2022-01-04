import { Component, OnInit } from '@angular/core';
import { DropdownSelection } from 'src/app/component/dropdown/dropdown.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  selectedTenant!: number;
  options: DropdownSelection[] = [];
  menuList = [
    {
      name: 'Profile',
      route: 'profile',
      additionalOption: [
        'option1', 'option2'
      ]
    },
    {
      name: 'Tenancy Agreement',
      route: 'agreement',
      additionalOption: [
        'option1', 'option2'
      ]
    },
    {
      name: 'Utility',
      route: 'utility',
      additionalOption: [
        'option1', 'option2'
      ]
    },
    {
      name: 'Claims',
      route: 'claims',
      additionalOption: [
        'option1', 'option2'
      ]
    },
  ]

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getTenantList();
  }

  getTenantList() {
    this.options = this.authService.savedUser.tenantId.map(d => {
      return {
        id: d,
        name: 'Tenant ' + d,
      }
    })
  }

}
