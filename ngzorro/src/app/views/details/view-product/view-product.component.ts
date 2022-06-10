import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/interface/products';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products_detail: Products | any;

  public address          = '';
  constructor(
    private productsService: ProductsService,
    private route          : ActivatedRoute,
    private location       : Location,
    private titleService   : Title,
    private router         : Router,
  ) {
    this.titleService.setTitle("Product Details");
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  async loadProduct() {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    return await this.productsService.getProduct(id).subscribe(response => {
      this.products_detail = response.data;
      this.getAddress();
    })
  }

  getAddress() {
    var street_building = this.products_detail.addresses_detail.street_building;
    var barangay = this.products_detail.addresses_detail.barangay;
    var city = this.products_detail.addresses_detail.city;
    var province = this.products_detail.addresses_detail.province;

    this.address = `${street_building}, ${barangay}, ${city}, ${province}`;
  }

  onclickCancel() {
    this.location.back();
  }

  onclickEdit(id: Number) {
    this.router.navigate([`products/${id}`])
  }

}
