import { Component } from '@angular/core';

interface PostResult {
  text: string;
  percentage: number;
}
interface Post{
  date: string;
  question: string;
  results: PostResult[];
  participants: number;
}
@Component({
  selector: 'app-post-results',
  templateUrl: './poll-post.component.html',
  styleUrls: ['./poll-post.component.scss']
})
export class PollPostComponent {
  posts: Post[] = [
    {
      date: '06/08/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 95 },
        { text: 'Answer 2', percentage: 30 },
        { text: 'Answer 3', percentage: 75 },
        { text: 'Answer 4', percentage: 80 }
      ],
      participants: 200
    },
    {
      date: '05/26/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 95 },
        { text: 'Answer 2', percentage: 75 },
        { text: 'Answer 3', percentage: 30 },
        { text: 'Answer 4', percentage: 80 }
      ],
      participants: 40
    },
    {
      date: '05/15/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 80 },
        { text: 'Answer 2', percentage: 60 },
        { text: 'Answer 3', percentage: 50 },
        { text: 'Answer 4', percentage: 85 }
      ],
      participants: 150
    },
    {
      date: '04/30/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 60 },
        { text: 'Answer 2', percentage: 55 },
        { text: 'Answer 3', percentage: 30 },
        { text: 'Answer 4', percentage: 40 }
      ],
      participants: 120
    },
    {
      date: '04/20/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 85 },
        { text: 'Answer 2', percentage: 90 },
        { text: 'Answer 3', percentage: 80 },
        { text: 'Answer 4', percentage: 70 }
      ],
      participants: 180
    },
    {
      date: '04/15/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 75 },
        { text: 'Answer 2', percentage: 65 },
        { text: 'Answer 3', percentage: 85 },
        { text: 'Answer 4', percentage: 60 }
      ],
      participants: 220
    },
    {
      date: '04/10/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 70 },
        { text: 'Answer 2', percentage: 65 },
        { text: 'Answer 3', percentage: 90 },
        { text: 'Answer 4', percentage: 60 }
      ],
      participants: 50
    },
    {
      date: '03/30/2023',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      results: [
        { text: 'Answer 1', percentage: 85 },
        { text: 'Answer 2', percentage: 75 },
        { text: 'Answer 3', percentage: 90 },
        { text: 'Answer 4', percentage: 95 }
      ],
      participants: 190
    }
  ];

  // Define the type of the `paginatedPosts` array
  paginatedPosts: Post[] = [];
  currentPage = 1;
  pageSize = 3;  // Change page size to 3 to have multiple pages
  totalPages = Math.ceil(this.posts.length / this.pageSize);

  ngOnInit() {
    this.updatePaginatedPosts();
  }

  updatePaginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedPosts = this.posts.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPosts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPosts();
    }
  }
}