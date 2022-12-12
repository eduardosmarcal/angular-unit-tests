import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleEventComponent } from './handle-event.component';
import {By} from "@angular/platform-browser";

describe('HandleEventComponent', () => {
  let component: HandleEventComponent;
  let fixture: ComponentFixture<HandleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set emoji on button click', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(title.textContent).toEqual('👨‍🎓');
  });
});
