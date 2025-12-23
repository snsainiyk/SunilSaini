import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  currentImageIndex: { [key: number]: number } = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // Initialize image indices
    this.products.forEach(product => {
      this.currentImageIndex[product.id] = 0;
    });
  }

  nextImage(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.currentImageIndex[productId] = 
        (this.currentImageIndex[productId] + 1) % product.images.length;
    }
  }

  prevImage(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.currentImageIndex[productId] = 
        this.currentImageIndex[productId] === 0 
          ? product.images.length - 1 
          : this.currentImageIndex[productId] - 1;
    }
  }

  getCurrentImage(product: Product): string {
    return product.images[this.currentImageIndex[product.id]];
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars: string[] = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }
    return stars;
  }

  orderProduct(product: Product): void {
    const message = `Hi, I would like to order ${product.name} - ${product.price} Rs.`;
    const whatsappUrl = `https://wa.me/916005319153?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }


}
