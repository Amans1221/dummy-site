import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Component initialization logic can go here if needed.
  }

  ngAfterViewInit(): void {
    // Select all menu items with the specified class once the view has been initialized
    const subMenuLinks = this.el.nativeElement.querySelectorAll("#leftside-navigation .sub-menu > a");

    // Add event listeners to each sub-menu link
    subMenuLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', (e: MouseEvent) => {
        // Prevent event propagation
        e.stopPropagation();

        // Get all sub-menus and close them (slide up equivalent)
        const subMenus = this.el.nativeElement.querySelectorAll("#leftside-navigation ul ul");
        subMenus.forEach((subMenu: HTMLElement) => {
          this.renderer.setStyle(subMenu, 'display', 'none'); // slideUp equivalent
        });

        // Check if the clicked sub-menu's next element is visible
        const nextElement = link.nextElementSibling as HTMLElement;
        if (nextElement && nextElement.style.display !== 'block') {
          this.renderer.setStyle(nextElement, 'display', 'block'); // slideDown equivalent
        }
      });
    });
  }
}
