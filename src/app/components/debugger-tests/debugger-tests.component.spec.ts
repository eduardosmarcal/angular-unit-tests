import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggerTestsComponent } from './debugger-tests.component';

// fdescribe('DebuggerTestsComponent', () => {
describe('DebuggerTestsComponent', () => {
  let component: DebuggerTestsComponent;
  let fixture: ComponentFixture<DebuggerTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebuggerTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebuggerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debugging a test', () => {
    // debugger;
    const data = { name: 'Debugger' };
    expect(data.name).toBe('Debugger');
  });
});
