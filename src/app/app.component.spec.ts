import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FixProblemsComponent } from './components/fix-problems/fix-problems.component';
import { DebuggerTestsComponent } from './components/debugger-tests/debugger-tests.component';
import { StubComponent } from './components/stub/stub.component';
import { StatementComponent } from './components/statement/statement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchersJasmineComponent } from './components/matchers-jasmine/matchers-jasmine.component';
import { MockComponent } from './components/mock/mock.component';
import { SpyOnComponent } from './components/spy-on/spy-on.component';
import { RequestComponent } from './components/request/request.component';
import { AsynchronousComponent } from './components/asynchronous/asynchronous.component';
import { TestComponent } from './components/test/test.component';
import { FixtureDetectChangeComponent } from './components/fixture-detect-change/fixture-detect-change.component';
import { AutoDetectChangeComponent } from './components/auto-detect-change/auto-detect-change.component';
import { HandleEventComponent } from './components/handle-event/handle-event.component';
import { FillFormComponent } from './components/fill-form/fill-form.component';
import { InputOutputComponent } from './components/input-output/input-output.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        DebuggerTestsComponent,
        FixProblemsComponent,
        HomeComponent,
        LoginComponent,
        MatchersJasmineComponent,
        MockComponent,
        SpyOnComponent,
        StatementComponent,
        StubComponent,
        RequestComponent,
        AsynchronousComponent,
        TestComponent,
        FixtureDetectChangeComponent,
        AutoDetectChangeComponent,
        HandleEventComponent,
        FillFormComponent,
        InputOutputComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular Unit Test with Jasmine and Karma');
  });
});
