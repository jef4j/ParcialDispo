import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories: string[] = [];
  products: any[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadProducts(category?: string) {
    if (category) {
      this.productService.getProductsByCategory(category).subscribe(data => {
        this.products = data;
      });
    } else {
      this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      });
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.loadProducts(this.selectedCategory);
  }

  viewProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
