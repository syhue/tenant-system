import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Tenant, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

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
