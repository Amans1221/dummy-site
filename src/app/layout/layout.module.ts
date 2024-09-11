import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopNavbarComponent,
    SideNavbarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ],
  exports:
    [
      TopNavbarComponent,
      SideNavbarComponent,
      LayoutComponent
    ]
})
export class LayoutModule { }
