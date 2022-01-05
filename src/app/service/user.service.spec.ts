import { UserService } from './user.service';

describe('UserService', () => {

  it('get correct tenant detail by id', () => {
    expect(new UserService().getTenantDetails(1).id).toBe(1);
  });

  it('get correct tenant detail by id', () => {
    expect(new UserService().getTenantDetails(12).id).toBe(12);
  });

  it('get nothing by non existing id', () => {
    expect(new UserService().getTenantDetails(100)).toBeUndefined();
  });
});
