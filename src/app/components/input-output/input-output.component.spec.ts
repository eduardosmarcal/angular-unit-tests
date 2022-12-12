import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';
import { UserCredential } from '../../interfaces/user-credential.interface';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive user', () => {
    const user: UserCredential = {
      name: 'Danilo',
      email: 'danilodev.silva@gmail.com',
      password: '091011'
    };

    component.user = user;

    expect(component.user).toEqual(user);
  });

  it('should emit message on button click', () => {
    const spiedUserMessageEmit = spyOn(component.userMessage, 'emit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(spiedUserMessageEmit).toHaveBeenCalled();
  });
});
