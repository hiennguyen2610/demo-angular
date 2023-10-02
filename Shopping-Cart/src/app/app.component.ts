import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product-list-model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements DoCheck{
  title = 'angular-shopping-card1111';

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 6S, 64GB',
      description: 'For AT&T / T-Mobile',
      thumbnail: '/assets/ip6s.jpeg',
      price: 3400000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Iphone 8, 64GB',
      description: 'For AT&T / T-Mobile',
      thumbnail: '/assets/ip6s.jpeg',
      price: 4900000,
      quantity: 3,
    },
    {
      id: 3,
      name: 'Iphone 12, 128GB',
      description: 'For AT&T / T-Mobile',
      thumbnail: '/assets/ip6s.jpeg',
      price: 8900000,
      quantity: 4,
    },
  ];

  promoCodes: PromoCode[] = [
    {
      code: '10',
      discountPercent: 10,
    },
    {
      code: '20',
      discountPercent: 20,
    },
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  discount: number = 0;
  tax: number = 0;
  discountPercent: number = 0;
  taxPercent: number = 0;

  // Hiển thị số lượng sản phẩm trên header và tính tiền
  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find((product) => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

  // Xóa sản phẩm
  removeProduct(productId: number) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  // Áp mã giảm giá
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`Áp mã giảm giá thành công!`);
    } else {
      alert(
        'Mã giảm giá không chính xác!.'
      );
    }
  }
}
