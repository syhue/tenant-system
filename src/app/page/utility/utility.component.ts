import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Tenant, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  get tenantId() {
    return this.route.snapshot.params.id;
  }

  get data(): Tenant {
    return this.userService.getTenantDetails(this.tenantId);
  }

}
