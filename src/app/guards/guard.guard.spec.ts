import { TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/login' };
  let routerMock: any = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: Router,
          useValue: routerMock
        }
      ]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect the user to the login page when the token does not exist', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should ', () => {
    const token = 'MY_ACCESS_TOKEN';
    localStorage.setItem('token', token);

    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});
