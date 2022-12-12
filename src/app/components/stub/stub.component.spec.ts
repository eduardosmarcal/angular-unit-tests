import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { StubComponent } from './stub.component';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StubComponent
      ],
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Home on button click', () => {
    component.goTo();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
