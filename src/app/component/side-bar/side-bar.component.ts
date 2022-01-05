import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { DropdownSelection } from 'src/app/component/dropdown/dropdown.component';

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
    private route: ActivatedRoute,
    private router: Router,
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

  routeTo() {
    this.router.navigate(['profile', this.selectedTenant]);
  }
}
