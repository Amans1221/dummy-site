import { Component } from '@angular/core';
declare var bootstrap: any;
interface User {
  name: string;
  email: string;
  signUpDate: string;
  status: string;
  isBlocked: boolean;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  searchText: string = '';
  currentPage: number = 1;
  selectedUser: User | null = null;  // For modal actions
  users: User[] = [
    { name: 'Rebecca Larry', email: 'nancy@yahoo.com', signUpDate: '10/24/2023', status: 'active', isBlocked: false },
    { name: 'Janet Patel', email: 'janet@yahoo.com', signUpDate: '10/24/2023', status: 'active', isBlocked: false },
    // Add more users as needed
  ];
  filteredUsers: User[] = [...this.users];

  filterUsers() {
    this.filteredUsers = this.users.filter(user => user.name.includes(this.searchText) || user.email.includes(this.searchText));
  }

  openDeleteModal(user: User) {
    this.selectedUser = user;
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
  }

  openBlockModal(user: User) {
    this.selectedUser = user;
    const blockModal = new bootstrap.Modal(document.getElementById('blockModal'));
    blockModal.show();
  }

  deleteUser() {
    if (this.selectedUser) {
      this.users = this.users.filter(user => user !== this.selectedUser);
      this.filterUsers();  // Update filtered list after deletion
      const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      deleteModal.hide();
    }
  }

  toggleBlock(user: User) {
    user.isBlocked = !user.isBlocked;
    const blockModal = bootstrap.Modal.getInstance(document.getElementById('blockModal'));
    blockModal.hide();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    this.currentPage++;
  }
}
