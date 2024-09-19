import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LibraryComponent } from './library/library.component';
import { UserReportedContentComponent } from './user-reported-content/user-reported-content.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'usermanagement', component: UserManagementComponent
  },
  {
    path: 'library', component: LibraryComponent
  },
  {
    path: 'userreport', component: UserReportedContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
