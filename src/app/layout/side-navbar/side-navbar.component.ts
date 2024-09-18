import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit, AfterViewInit {

  isSidebarActive = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleMenu(event: Event): void {
    const clickedElement = (event.target as HTMLElement);
    const parentLi = clickedElement.closest('li');
    const subMenu = parentLi?.querySelector('ul');

    if (subMenu) {
      subMenu.classList.toggle('active');
      const arrow = parentLi?.querySelector('.arrow');
      if (arrow) {
        arrow.classList.toggle('fa-chevron-right');
        arrow.classList.toggle('fa-chevron-down');
      }
    }
  }

  ngAfterViewInit(): void {
    // You can add additional initialization here if needed.
  }
}
