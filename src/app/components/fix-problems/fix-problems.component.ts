import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StubComponent } from '../stub/stub.component';

@Component({
  selector: 'app-fix-problems',
  templateUrl: './fix-problems.component.html',
  styleUrls: ['./fix-problems.component.scss']
})
export class FixProblemsComponent {
  form!: FormGroup;
  price: number = 0;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openDialog(): void {
    this.dialog.open(StubComponent, {
      width: '250px',
      data: {}
    });
  }
}
