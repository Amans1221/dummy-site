import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule } from '@angular/forms';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [DashboardComponent, UserManagementComponent, LibraryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule 

  ], exports: [DashboardComponent,UserManagementComponent,LibraryComponent]
})
export class HomeModule { }
