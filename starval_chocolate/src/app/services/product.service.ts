import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: '72%Dark Chocolate',
      description: 'Dark chocolate with a smooth ganache center. Made with 72% cocoa for the perfect balance of bitter and sweet.',
      mrp: 179,
      price: 116,
      Weight: '45g',
      category: 'Premium',
      images: [
        'assets/images/products/72-dark/72.png',
        'assets/images/products/72-dark/72back.png',
      ]
    },
    {
      id: 2,
      name: '72% Dark Chocolate with Cardamom',
      description: 'Dark chocolate infused with fragrant cardamom, delivering rich cocoa depth, warm spice harmony, and unforgettable artisanal taste.',
      mrp: 179,
      price: 116,
      Weight: '45g',
      category: 'Premium',
      images: [
        'assets/images/products/72-darkCardamom/CardamomFront.png',
        'assets/images/products/72-darkCardamom/CardamomBack.png',
      ]
    },
    {
      id: 3,
      name: '72% Dark Chocolate with Fruits & Nuts',
      description: 'Dark chocolate blended with rich fruits and crunchy nuts creates a bold, wholesome bite full of delicious natural flavours.',
      mrp: 179,
      price: 116,
      Weight: '45g',
      category: 'Premium',
      images: [
        'assets/images/products/72-darkFruits&Nuts/fruitNnutsfront.png',
        // 'assets/images/products/72-darkFruits&Nuts/fruitNnutsback.png',
      ]
    },
    {
      id: 4,
      name: '72% Dark Chocolate with Jaggery & Cardamom',
      description: 'Dark chocolate sweetened with jaggery and infused with cardamom delivers warm spice, rich cocoa and natural sweetness.',
      mrp: 179,
      price: 116,
      Weight: '45g',
      category: 'Specialty',
        images: [
          'assets/images/products/72-darkJuggary/JaggeryFront.png',
        // 'assets/images/products/72-darkJuggary/JaggeryBack.png',
      ]
    },
    {
      id: 5,
      name: 'Assorted Chocolate Collection',
      description: 'A beautiful selection of our finest chocolates. Includes dark, cardamom, and Jaggery with various fillings Like Nuts & Fruits.',
      mrp: 799,
      price: 519,
      Weight: '200g',
      category: 'Gift Box',
      images: [
          'assets/images/products/giftBox/giftBox.png',
        // 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500'
      ]
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
