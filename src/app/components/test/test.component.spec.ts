import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should access DOM element with debugElement.query()', () => {
    const titleElement = fixture.debugElement.query(By.css('#test-component-title')).nativeElement;
    expect(titleElement.textContent).toEqual('Working with debugElement.query() and nativeElement.querySelector()');
  });

  it('should access DOM element with nativeElement.querySelector()', () => {
    const paragraphElement = fixture.debugElement.nativeElement.querySelector('#test-component-paragraph');
    expect(paragraphElement.textContent).toEqual('Are you learning from the Unit Testing course?');
  });

  it('should have green background color on button Yes', () => {
    const buttonYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement;
    expect(buttonYes.style.backgroundColor).toEqual('green');
  });

  it('should have red background color on button No', () => {
    const buttonNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement;
    expect(buttonNo.style.backgroundColor).toEqual('red');
  });
});
