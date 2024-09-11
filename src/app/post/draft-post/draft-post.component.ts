import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-draft-post',
  templateUrl: './draft-post.component.html',
  styleUrl: './draft-post.component.scss'
})
export class DraftPostComponent {

  items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  itemsPerPage = 10;
  pages = Array.from({ length: Math.ceil(this.items.length / this.itemsPerPage) }, (_, i) => i + 1);
  currentPage = 1;
  itemToDelete: string | null = null;

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.items.slice(start, end);
  }

  deleteItem(item: string) {
    this.items = this.items.filter(i => i !== item);
    this.updatePagination();
  }

  deleteAll() {
    this.items = [];
    this.updatePagination();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  openModal(item: string) {
    this.itemToDelete = item;
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  confirmDelete() {
    if (this.itemToDelete) {
      this.deleteItem(this.itemToDelete);
      this.itemToDelete = null;
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
    modal.hide();
  }

  updatePagination() {
    this.pages = Array.from({ length: Math.ceil(this.items.length / this.itemsPerPage) }, (_, i) => i + 1);
    if (this.currentPage > this.pages.length) {
      this.currentPage = this.pages.length;
    }
  }
}