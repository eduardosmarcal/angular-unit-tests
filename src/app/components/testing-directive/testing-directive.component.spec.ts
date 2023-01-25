import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestingDirectiveComponent } from './testing-directive.component';
import { HoverFocusDirective } from '../../directives/hover-focus.directive';

describe('TestingDirectiveComponent', () => {
  let component: TestingDirectiveComponent;
  let fixture: ComponentFixture<TestingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestingDirectiveComponent,
        HoverFocusDirective
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the background color on mouse over', () => {
    const title = fixture.debugElement.query(By.css('h2'));

    title.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(title.nativeElement.style.backgroundColor).toEqual('blue');

    title.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(title.nativeElement.style.backgroundColor).toEqual('inherit');
  });
});
