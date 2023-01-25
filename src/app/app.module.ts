import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixProblemsComponent } from './components/fix-problems/fix-problems.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StatementComponent } from './components/statement/statement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MockComponent } from './components/mock/mock.component';
import { StubComponent } from './components/stub/stub.component';
import { DebuggerTestsComponent } from './components/debugger-tests/debugger-tests.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { HttpPipe } from './pipes/http.pipe';
import { MatchersJasmineComponent } from './components/matchers-jasmine/matchers-jasmine.component';
import { SpyOnComponent } from './components/spy-on/spy-on.component';
import { RequestComponent } from './components/request/request.component';
import { AsynchronousComponent } from './components/asynchronous/asynchronous.component';
import { TestComponent } from './components/test/test.component';
import { FixtureDetectChangeComponent } from './components/fixture-detect-change/fixture-detect-change.component';
import { AutoDetectChangeComponent } from './components/auto-detect-change/auto-detect-change.component';
import { HandleEventComponent } from './components/handle-event/handle-event.component';
import { FillFormComponent } from './components/fill-form/fill-form.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { TestingPipesDirectiveRouteComponent } from './components/testing-pipes-directive-route/testing-pipes-directive-route.component';
import { TestingRouteComponent } from './components/testing-route/testing-route.component';
import { TestingDirectiveComponent } from './components/testing-directive/testing-directive.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FixProblemsComponent,
    HomeComponent,
    LoginComponent,
    StatementComponent,
    DashboardComponent,
    HoverFocusDirective,
    HttpPipe,
    MockComponent,
    StubComponent,
    DebuggerTestsComponent,
    MatchersJasmineComponent,
    SpyOnComponent,
    RequestComponent,
    AsynchronousComponent,
    TestComponent,
    FixtureDetectChangeComponent,
    AutoDetectChangeComponent,
    HandleEventComponent,
    FillFormComponent,
    InputOutputComponent,
    TestingPipesDirectiveRouteComponent,
    TestingRouteComponent,
    TestingDirectiveComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
