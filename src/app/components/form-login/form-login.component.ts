import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
  }

  login() {
    if(this.isValidForm()) {
      this.http.login(this.createPayload()).subscribe()
    }
  }
  isValidForm(): boolean {
    return this.form.valid;
  }

  getValueControl(form: any, control: string) {
    return form.controls[control].value
  }

  createPayload(
    email = this.getValueControl(this.form, 'email'),
    password = this.getValueControl(this.form, 'password')
  ) {
    return { email, password };
  }

  onClick(): void {
    console.log(this.form);
  }
}
