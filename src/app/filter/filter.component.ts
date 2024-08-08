import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  items = [
    { name: 'Item 1', category: 'A' },
    { name: 'Item 2', category: 'B' },
    { name: 'Item 3', category: 'A' },
    { name: 'Item 4', category: 'C' },
    { name: 'Item 5', category: 'B' }
  ];

  categories = ['A', 'B', 'C'];
  selectedCategories: string[] = [];

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterItems();
  }


  filteredItems = this.items;

  filterItems() {
    if (this.selectedCategories.length === 0) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => this.selectedCategories.includes(item.category));
    }
  }
}
