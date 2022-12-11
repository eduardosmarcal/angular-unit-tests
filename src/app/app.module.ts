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
import { StubComponent } from './components/stub/stub.component';
import { DebuggerTestsComponent } from './components/debugger-tests/debugger-tests.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { HttpPipe } from './pipes/http.pipe';

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
    StubComponent,
    DebuggerTestsComponent
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
