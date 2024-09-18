
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  selectedTab: string = 'video'; // Default tab is Video

  videos = [
    {
      title: 'Cras eu elit congue, placerat dui.',
      description: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque.',
      views: '54',
      date: '3 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Cras eu elit congue, placerat dui.',
      description: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque.',
      views: '54',
      date: '3 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },    {
      title: 'Cras eu elit congue, placerat dui.',
      description: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque.',
      views: '54',
      date: '3 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },    {
      title: 'Cras eu elit congue, placerat dui.',
      description: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque.',
      views: '54',
      date: '3 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },
    // Add more video objects here...
  ];

  pdfs = [
    {
      title: 'PDF Document Title 1',
      description: 'Description of the PDF document goes here. Integer eu arcu vel arcu suscipit ultrices.',
      views: '22',
      date: '2 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title: 'PDF Document Title 1',
      description: 'Description of the PDF document goes here. Integer eu arcu vel arcu suscipit ultrices.',
      views: '22',
      date: '2 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    }, {
      title: 'PDF Document Title 1',
      description: 'Description of the PDF document goes here. Integer eu arcu vel arcu suscipit ultrices.',
      views: '22',
      date: '2 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    }, {
      title: 'PDF Document Title 1',
      description: 'Description of the PDF document goes here. Integer eu arcu vel arcu suscipit ultrices.',
      views: '22',
      date: '2 week ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },
    // Add more PDF objects here...
  ];

  playlists = [
    {
      title: 'Playlist Title 1',
      description: 'This is the first playlist description. Integer eu arcu vel arcu suscipit ultrices.',
      views: '34',
      date: '1 month ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },   {
      title: 'Playlist Title 1',
      description: 'This is the first playlist description. Integer eu arcu vel arcu suscipit ultrices.',
      views: '34',
      date: '1 month ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },   {
      title: 'Playlist Title 1',
      description: 'This is the first playlist description. Integer eu arcu vel arcu suscipit ultrices.',
      views: '34',
      date: '1 month ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },   {
      title: 'Playlist Title 1',
      description: 'This is the first playlist description. Integer eu arcu vel arcu suscipit ultrices.',
      views: '34',
      date: '1 month ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },   {
      title: 'Playlist Title 1',
      description: 'This is the first playlist description. Integer eu arcu vel arcu suscipit ultrices.',
      views: '34',
      date: '1 month ago',
      thumbnail: 'https://th.bing.com/th/id/OIP.muwhmmniHjSMUPJKH-bo4gHaEK?rs=1&pid=ImgDetMain',
    },
    // Add more playlist objects here...
  ];

  currentItems = this.videos; // Start with videos
  showModal!: boolean;

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (tab === 'video') {
      this.currentItems = this.videos;
    } else if (tab === 'pdf') {
      this.currentItems = this.pdfs;
    } else if (tab === 'playlist') {
      this.currentItems = this.playlists;
    }
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle file selection
  }

  uploadFile() {
    // Implement file upload logic
    this.closeModal();
  }
}