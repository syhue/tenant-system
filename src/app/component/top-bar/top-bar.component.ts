import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from 'src/app/service/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() tenantId!: number;
  @Input() data!: Tenant;

  constructor() { }

  ngOnInit(): void {
  }

}
