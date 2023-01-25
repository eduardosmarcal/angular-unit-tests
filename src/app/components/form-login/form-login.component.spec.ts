import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { FormLoginComponent } from './form-login.component';
import { HttpService } from '../../services/http.service';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        FormLoginComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid form', () => {
    const result = component.isValidForm();

    expect(result).toEqual(false);
  });

  it('should return valid form', () => {
    component.form.controls['email'].setValue('email@domain.com');
    component.form.controls['password'].setValue('test');

    const result = component.isValidForm();

    expect(result).toEqual(true);
  });

  it('should disabled the button if the form is not valid', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

    expect(button.disabled).toEqual(true);
  });

  it('should enable the button if the form is valid', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

    component.form.controls['email'].setValue('email@domain.com');
    component.form.controls['password'].setValue('test');

    fixture.detectChanges();

    expect(button.disabled).toEqual(false);
  });

  it('should return the value of a form control', () => {
    component.form = new FormGroup({
      email: new FormControl('email@domain.com'),
      password: new FormControl('test')
    });

    expect(component.getValueControl(component.form, 'email')).toEqual('email@domain.com');
    expect(component.getValueControl(component.form, 'password')).toEqual('test');
  });

  it('should create a payload to submit to the API', () => {
    const payload = {
      email: 'email@domain.com',
      password: 'test'
    };

    expect(component.createPayload('email@domain.com', 'test')).toEqual(payload);
  });

  it('should log the user in', () => {
    const res = {
      id: 1,
      email: 'email@domain.com',
      password: 'test'
    };

    component.form = new FormGroup({
      email: new FormControl('email@domain.com'),
      password: new FormControl('test')
    });

    const spiedLogin = spyOn(httpService, 'login').and.returnValue(of(res));

    component.isValidForm();
    component.login();

    expect(spiedLogin).toHaveBeenCalledTimes(1);
  });
});
