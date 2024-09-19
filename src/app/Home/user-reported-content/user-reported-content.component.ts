import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reported-content',
  templateUrl: './user-reported-content.component.html',
  styleUrls: ['./user-reported-content.component.scss']
})
export class UserReportedContentComponent {
  // Define default images
  defaultProfileImage = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';
  defaultPostImage = 'https://www.electricalconnectionsau.com.au/wp-content/uploads/2020/02/no-image-available-grid-600x393.jpg';

  users = [
    {
      profileImageUrl: null,  // Profile image is null, fallback will be used
      postImageUrl: 'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg',
      name: 'Doris Baker',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      message: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultricies quis non mauris.'
    },
    {
      profileImageUrl: 'assets/user3.jfif',
      postImageUrl: undefined,  // Post image is undefined, fallback will be used
      name: 'Rebecca Larry',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      message: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultricies quis non mauris.'
    },
    {
      profileImageUrl: undefined,  // Profile image is undefined, fallback will be used
      postImageUrl: undefined,  // Post image is undefined, fallback will be used
      name: 'Larry becca Dan',
      time: '1 hour ago',
      title: 'Cras eu elit congue, placerat dui.',
      message: 'Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultricies quis non mauris.'
    }
  ];

  // Method to get the profile image with fallback
  getProfileImage(user: any): string {
    return user.profileImageUrl ? user.profileImageUrl : this.defaultProfileImage;
  }

  // Method to get the post image with fallback
  getPostImage(user: any): string {
    return user.postImageUrl ? user.postImageUrl : this.defaultPostImage;
  }
}
