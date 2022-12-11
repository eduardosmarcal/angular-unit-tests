import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StatementComponent } from './components/statement/statement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'statement',
    component: StatementComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
