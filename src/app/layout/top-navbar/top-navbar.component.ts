import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent {
  defaultImageUrl = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.defaultImageUrl;
  }
}
