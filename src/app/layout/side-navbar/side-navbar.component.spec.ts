import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  isSidebarActive: boolean = false;

  // Define your menuItems array with items and optional subitems
  menuItems = [
    {
      name: 'Dashboard',
      icon: 'fa fa-dashboard',
      subItems: ['Overview', 'Analytics', 'Reports']
    },
    {
      name: 'Users',
      icon: 'fa fa-users',
      subItems: ['Add User', 'Manage Users', 'User Permissions']
    },
    {
      name: 'Settings',
      icon: 'fa fa-cog',
      subItems: ['General Settings', 'Security', 'Notifications']
    }
  ];

  // Toggle the sidebar visibility
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  // Toggle the sub-menu visibility
  toggleMenu(event: any) {
    const clickedItem = event.currentTarget.parentNode;
    const subMenu = clickedItem.querySelector('ul');
    if (subMenu) {
      subMenu.classList.toggle('active');
    }
  }
}
