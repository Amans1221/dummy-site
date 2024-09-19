import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule } from '@angular/forms';
import { LibraryComponent } from './library/library.component';
import { UserReportedContentComponent } from './user-reported-content/user-reported-content.component'; 

@NgModule({
  declarations: [DashboardComponent, UserManagementComponent, LibraryComponent,UserReportedContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule 

  ], exports: [DashboardComponent,UserManagementComponent,LibraryComponent,UserReportedContentComponent]
})
export class HomeModule { }
