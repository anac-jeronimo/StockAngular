import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'StockClient';

  powers = ['Power 1', 'Power 2'];

  productForm = new FormGroup({
    iva: new FormControl(''),
    pvp: new FormControl(''),
    discount: new FormControl(''),
  });

  productValue = '';

  constructor(private http: HttpClient) {}

  setProductValue(product: any) {
    this.productValue = JSON.stringify(product);
  }

  createProduct() {
    this.http
      .post(
        'http://localhost:8080/stockmanagement/api/products',
        this.productForm.value
      )
      .subscribe((res: any) => this.setProductValue(res));
  }

  getAllProducts() {
    this.http
      .get('http://localhost:8080/stockmanagement/api/products')
      .subscribe((res: any) => console.log(res));
  }
}
