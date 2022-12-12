import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyOnComponent } from './spy-on.component';

describe('SpyOnComponent', () => {
  let component: SpyOnComponent;
  let fixture: ComponentFixture<SpyOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the user into the system when clicking on button', () => {
    const spiedComponent = spyOn(component, 'isLogged').and.callThrough();
    component.isLogged();
    expect(spiedComponent).toHaveBeenCalledTimes(1);
    expect(component.logged).toBeTrue();
  });
});
