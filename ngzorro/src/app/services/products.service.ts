import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Products, ProductsDetail } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl: string = 'http://localhost:8000/api/';
  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(query?: string): Observable<Products[]> {
    const url = this.baseurl + `admin/products/${query}`
    return this.http.get<Products[]>(url);
  }
  getProduct(id?: number): Observable<ProductsDetail> {
    const url = this.baseurl + `product/${id}`
    return this.http.get<ProductsDetail>(url);
  }
  updateProduct(product: Products): Observable<any> {
    const url = this.baseurl + `product`
    return this.http.put(url, product, this.httpOptions)
  }
  addProduct(product: Products): Observable<Products> {
    const url = this.baseurl + `product`
    return this.http.post<Products>(url, product, this.httpOptions)
  }
  deleteProduct(id?: Number): Observable<any> {
    const url = this.baseurl + `product/${id}`
    return this.http.delete(url, this.httpOptions)
  }
}
