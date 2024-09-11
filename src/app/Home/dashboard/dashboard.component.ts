import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  defaultImageUrl = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';
  public activeSettings : any;
 
  
  posts = [
    {
      profileMainUrl:'assets/hello.jpg',
      profileImageUrl: 'assets/user1.jpg',
      userName: 'Rebecca Pierce',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      content: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum.',
      likes: 50,
      comments: 30,
      replies: 2
    },
    {
      profileMainUrl:'assets/hello.jpg',
      profileImageUrl: 'assets/user2.jpg',
      userName: 'Doris Baker',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      content: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum.',
      likes: 50,
      comments: 30,
      replies: 2
    },
    {
      profileMainUrl:'assets/hello.jpg',
      profileImageUrl: 'assets/user3.jfif',
      userName: 'Larry Becca Dan',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      content: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum.',
      likes: 50,
      comments: 30,
      replies: 2
    },
    {
      profileMainUrl:'assets/user1.jpg',
      profileImageUrl: 'assets/user3.jfif',
      userName: 'Larry Becca Dan',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      content: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum.',
      likes: 50,
      comments: 30,
      replies: 2
    },
    {
      profileMainUrl:'assets/user1.jpg',
      profileImageUrl: 'assets/user3.jfif',
      userName: 'Larry Becca Dan',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      content: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum.',
      likes: 50,
      comments: 30,
      replies: 2
    }
  ];
  
  isLoading = true;
  
  ngOnInit(): void {
    this.loadData();
  }
  
  
  loadData() {
    // Simulate an API call or data fetching
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulate a 3-second delay
  }
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.defaultImageUrl;
  }

  editPost(post:any){
 
  }
  deletePost(post:any){

  }
  toggleSettings(i:any){

  }
}