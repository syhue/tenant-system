import { AuthService } from './auth.service';

describe('AuthService', () => {

  it('login successfully with correct credentials', () => {
    const formValue = {
      username: 'user1',
      password: 'password'
    };
    new AuthService().login(formValue).subscribe(value => {
      expect(value.result).toBeTrue();
    });
  });

  it('login successfully with correct credentials', () => {
    const formValue = {
      username: 'user2',
      password: 'password2'
    };
    new AuthService().login(formValue).subscribe(value => {
      expect(value.result).toBeTrue();
    });
  });

  it('login failed with wrong credentials', () => {
    const formValue = {
      username: 'user123',
      password: 'password123'
    };
    new AuthService().login(formValue).subscribe(value => {
      expect(value.result).toBeFalse();
    });
  });
});
