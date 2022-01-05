import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick, flush } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { routes } from "./admin-routing.module";
import { HomeComponent } from "src/app/page/home/home.component";
import { ProfileComponent } from "src/app/page/profile/profile.component";
import { AgreementComponent } from "src/app/page/agreement/agreement.component";
import { UtilityComponent } from "src/app/page/utility/utility.component";
import { ClaimsComponent } from "src/app/page/claims/claims.component";
import { AdminComponent } from "src/app/layout/admin/admin.component";

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, ProfileComponent, AgreementComponent, UtilityComponent, ClaimsComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AdminComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
    flush();
  }));

  it('navigate to "profile" takes you to /profile', fakeAsync(() => {
    router.navigate(["/profile", 1]).then(() => {
      expect(location.path()).toBe("/profile/1");
    });
    flush();
  }));

  it('navigate to "agreement" takes you to /agreement', fakeAsync(() => {
    router.navigate(["/agreement", 1]).then(() => {
      expect(location.path()).toBe("/agreement/1");
    });
    flush();
  }));

  it('navigate to "utility" takes you to /utility', fakeAsync(() => {
    router.navigate(["/utility", 1]).then(() => {
      expect(location.path()).toBe("/utility/1");
    });
    flush();
  }));

  it('navigate to "claims" takes you to /claims', fakeAsync(() => {
    router.navigate(["/claims", 1]).then(() => {
      expect(location.path()).toBe("/claims/1");
    });
    flush();
  }));
});
