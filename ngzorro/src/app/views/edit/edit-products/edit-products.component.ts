import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  productForm!: FormGroup;
  id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(
    private productsService: ProductsService,
    private location       : Location,
    private route          : ActivatedRoute,
    private fb             : FormBuilder,
    private router         : Router,
    private titleService   : Title
  ) {
    if (this.id === 0) this.titleService.setTitle("Add Product");
    else this.titleService.setTitle("Edit Product");
  }

  ngOnInit(): void {
    this.validateForm();
    if (this.id > 0) this.loadProduct();
  }

  async loadProduct() {
    return await this.productsService.getProduct(this.id).subscribe(response => {
      this.productForm.patchValue(response.data)
    })
  }

  onclickSave():void {
    const swalPopUp = () => {
      Swal.fire({
          title            : "Saved",
          text             : 'Product has been Saved',
          icon             : "success",
          timer            : 1500,
          showConfirmButton: false,
      }).then(() => {
        this.goBack()
      })
    }

    if (this.productForm.valid) {
      if (this.id > 0) {
        this.productsService.updateProduct(this.productForm.value).subscribe(() =>
          swalPopUp()
        );
      } else {
        this.productsService.addProduct(this.productForm.value).subscribe(() =>
          swalPopUp()
        );
      }
    } else {
      Object.values(this.productForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  goBack() {
    this.router.navigate([`products`])
  }

  onclickCancel(){
    this.goBack()
  }

  validateForm() {
    this.productForm = this.fb.group({
      name               : [null, [Validators.required]],
      category           : [null, [Validators.required]],
      price              : [null, [Validators.required]],
      quantity           : [null, [Validators.required]],
      user_id            : 9,
      status             : 'O',
      product_status     : 'Available',
      product_location_id: 16,
      product_location   : 'In The, Middle, Of No Where',
      thumbnail_name     : '',
      description        : ''
    })
  }

}
