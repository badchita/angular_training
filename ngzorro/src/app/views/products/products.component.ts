import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter;

  products  : Products[] = [];
  url       : string     = 'products/';
  urlDetails: string     = 'products/detail/';

  tableHeaders = [
    { title:'Name', firstTitle: true},
    { title:'Quantity'},
    { title:'Price'},
    { title:'Status'},
    { title:'Action'},
  ];
  constructor(
    private productsService: ProductsService,
    private titleService   : Title
  ) {
    this.titleService.setTitle("Products")
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  ongetDeleteId(eventData: any) {
    const swalPopUp = () => {
      Swal.fire({
          title            : "Deleted!",
          text             : 'Product has been Deleted',
          icon             : "success",
          timer            : 1500,
          showConfirmButton: false,
      }).then(() => {
        this.loadProducts()
      })
    }
    this.productsService.deleteProduct(eventData).subscribe(() => {
      swalPopUp()
    });
  }

  loadProducts(): void {
    const query = `?offset=0&limit=10&user_id=1&status=O`
    this.productsService.getProducts(query).subscribe((response) => {
      this.products = response
    })
  }
}
