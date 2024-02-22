import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  openSlidePanel() {
    this.isVisible = true;
  }
  closeSlidePanel() {
    this.isVisible = false;
  }
  isVisible: boolean = false;

  productObj: any = {
    productId: 1,
    productSKU: "",
    productName: "",
    productPrice: 0,
    productShortName: "",
    productDescription: "",
    createdDate: new Date(),
    deliveryTimeSpan:"",
    categoryId:0,
    productImageUrl: "",
  };
}
