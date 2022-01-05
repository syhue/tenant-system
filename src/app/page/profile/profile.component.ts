import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Tenant, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
