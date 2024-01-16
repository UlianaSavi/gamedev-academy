import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export enum Paths {
  login = 'login',
  dashboard = 'dashboard',
}

const routes: Routes = [
  { path: '', redirectTo: Paths.login, pathMatch: 'full' },
  { path: Paths.login, component: LoginComponent, canActivate: [AuthGuard]},
  { path: Paths.dashboard, component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
